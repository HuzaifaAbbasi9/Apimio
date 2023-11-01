let selectedElements = [];
let isSelectionModeActive = false;

function toggleSelectionMode() {
    isSelectionModeActive = !isSelectionModeActive;
    document.body.classList.toggle('selection-mode', isSelectionModeActive);
    if (!isSelectionModeActive) {
        removeClickListeners();
    }
}

function enterSelectionMode() {
    toggleSelectionMode();
}

function exitSelectionMode() {
    toggleSelectionMode();
    displaySelected();
}

function displaySelected() {
    const selectedElementsList = document.getElementById('selected-elements-list');
    selectedElementsList.innerHTML = '';
    for (const selectedElement of selectedElements) {
        const listItem = document.createElement('li');
        listItem.textContent = selectedElement.textContent;
        selectedElementsList.appendChild(listItem);
    }
}

function sendSimulatedGTMEvent(elementType, elementLabel) {
    console.log(`Sending simulated GTM event for ${elementType}: ${elementLabel}`);
}

function selectElementForTracking(element) {
    if (isSelectionModeActive) {
        element.classList.toggle('selected');
        if (element.classList.contains('selected')) {
            element.classList.add('tracked');
            element.addEventListener('click', () => {
                sendSimulatedGTMEvent(element.tagName, element.textContent);
            });
            selectedElements.push(element);
        } else {
            element.classList.remove('tracked');
            element.removeEventListener('click', () => {});
            const index = selectedElements.indexOf(element);
            if (index > -1) {
                selectedElements.splice(index, 1);
            }
        }
        displaySelected();
    }
}

function removeClickListeners() {
    const interactiveElements = document.querySelectorAll('.interactive-elements > *');
    interactiveElements.forEach((element) => {
        element.removeEventListener('click', () => {});
    });
}

enterSelectionMode();

const toggleSelectionModeButton = document.querySelector('#toggle-selection-mode-button');
toggleSelectionModeButton.addEventListener('click', () => {
    if (isSelectionModeActive) {
        exitSelectionMode();
    } else {
        enterSelectionMode();
    }
});

// Add event listeners for interactive elements
const interactiveElements = document.querySelectorAll('.interactive-elements > *');
interactiveElements.forEach((element) => {
    element.addEventListener('click', () => {
        selectElementForTracking(element);
    });
});
