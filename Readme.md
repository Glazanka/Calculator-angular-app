

## README - Angular Calculator Application

## Overview
This project is a simple calculator built using Angular, demonstrating core Angular concepts such as components, services, and routing. The calculator supports basic arithmetic operations, including addition, subtraction, multiplication, and division, with a clean UI and interactive functionality.

## Project Structure
/src
    /app
        /components\calculator\component
            .html
            .scss
            .ts
            .spec.ts
        /pages\about\component
            .html
            .scss
            .ts
            .spec.ts
        /services
            calculator.service.spec.ts
            calculator.service.ts
        app.component.ts
        app.routes.ts
    main.ts
    index.html
    server.ts
    styles.scss

## Components: 
  . The application is built using Angular standalone components. The main components include:
## Calculator Component: 
  . Handles the UI and logic for performing calculations.
## About Component: 
  . Provides information about the calculator and contains a button to navigate to the calculator.
## Navigation Component: 
  . Displays a navigation bar with active link highlighting.
## Services:
  . A dedicated service is used to process mathematical expressions, ensuring clean separation between UI and logic.

## Routing:
  . The application uses Angular Router to navigate between the calculator and the about page.
  . The navigation bar dynamically updates to highlight the active page.
### Features
    . Basic Arithmetic Operations:
    . Supports addition, subtraction, multiplication, and division.

##  User-Friendly Input Handling:
    . Prevents operator chaining (e.g., 3+++4 is not allowed).
    . Allows replacing the last operator if a different one is selected.
    . Prevents unnecessary leading zeros (e.g., 007 is not allowed).

## Error Handling:
    . Displays an error message for invalid calculations instead of crashing.
    . Clears the error message once a valid input is entered.
## Backspace Functionality:
    . Allows users to delete the last entered character.
    . Implemented directly inside the calculator display.
## Input Length Restriction:
    . Limits input to a maximum of 10 characters.
    . Displays a warning message when the limit is reached.
## Result Formatting:
    . Trims long results to 10 characters.
    . Uses scientific notation if necessary for large numbers.
## Styled UI Without CSS Libraries:
    . Fully custom SCSS for styling, including:
        . Neon green action buttons.
        . Red "Clear" button.
        . Orange backspace button.
        . Grid-based layout with properly sized elements.
        
        
## How to Run the Project
1. Clone or download the project.
2. Navigate to the project folder in a terminal.
3. Install dependencies using:
    `npm install`
4. Start development server:
    `ng serve`
5. Open the application in a browser at`http://localhost:4200/`

## Assumptions & Edge Cases
    . Users will primarily enter numbers and standard arithmetic operators.
    . The calculator prevents invalid sequences of inputs (e.g., multiple operators in a row).
    . If a user attempts to divide by zero, the calculator will display an error.
    . The UI ensures readability by limiting the number of digits displayed.
## Final Notes
. This project was built from scratch to demonstrate an understanding of Angular fundamentals, including component-based architecture, services, and routing. No external CSS frameworks were used, and all logic was implemented manually to ensure a clear demonstration of Angular capabilities.

