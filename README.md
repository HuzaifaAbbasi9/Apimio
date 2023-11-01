# Visual Interaction Selector

This project is a simplified tool that allows users to select and track interactions on a mock webpage. Users can enter "selection mode," hover over interactive elements to highlight them, and click to mark elements for tracking. Simulated events are sent to a mock Google Tag Manager (GTM) endpoint and logged in the console.

## Features

-   Enter "selection mode" to choose interactive elements for tracking.
-   Hover over elements to highlight them for visual indication.
-   Click to select or unselect elements for tracking.
-   Simulate GTM events for selected elements.

## Approach

The project is built using HTML, CSS, and JavaScript. It follows these main steps:

1. **Toggle Selection Mode:** Users can toggle the selection mode on and off, which enables or disables the tracking of interactive elements.

2. **Select and Unselect Elements:** In selection mode, users can click on interactive elements to mark them for tracking. Clicking again will unselect them.

3. **Event Simulation:** When an element is marked for tracking, a simulated GTM event is sent and logged in the console, including the element type and label.

4. **Display Selected Elements:** A dashboard on the side lists all selected elements and counts their interactions.

## Challenges Faced

-   Implementing hover highlighting and visual indication for selected elements.
-   Managing the logic to select and unselect elements.
-   Simulating GTM events and logging them correctly.

## How to Run

To run the project locally, follow these steps:

1. Clone this repository to your local machine
2. Just click and open the index.html file in your browser
