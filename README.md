## Project Name
SVG Logo Maker

## Description
The SVG Logo Maker is a Node.js command-line application that allows users to generate custom SVG logos. Users can select a color and shape, provide text for the logo, and save the generated SVG to a file. The application offers a choice of shapes including circles, triangles, and squares, and supports both color keywords and hexadecimal values for colors.

## Additional Description
- The application accepts user input from the command line.
- Users can enter up to three characters for the logo text.
- Users can enter a color for the text (keyword or hexadecimal).
- Users are presented with a choice of shapes: circle, triangle, or square.
- Users can enter a color for the chosen shape (keyword or hexadecimal).
- An SVG file named `logo.svg` is created based on the input.
- The application prints "Generated logo.svg" in the command line upon successful creation.
- The `logo.svg` file displays a 300x200 pixel image matching the entered criteria when opened in a browser.

## Technologies
This application uses Node.js, Jest for running unit tests, and Inquirer for collecting user input.

## Installation
To install and run the SVG Logo Maker:

1. Clone the repository to your local machine.
2. Install the required dependencies:
   - Run `npm install` to install all dependencies.
   - Ensure Inquirer is installed for user input.
   - Ensure Jest is installed for running tests.


## Usage
- Run the application using `node index.js`.
- Follow the command-line prompts to select a shape, colors, and text for your logo.
- The application will generate an SVG file named `logo.svg` in the specified output directory.

## Testing
- Run unit tests with `npm test`.
- Ensure tests for `Triangle`, `Circle`, and `Square` classes in `lib/shapes.test.js` are passing.

## Video Demonstration
[Link to Walkthrough Video](#) - https://www.loom.com/share/ad37a47820e44aae98ed15c9840ada86?sid=f9b988bd-5cdc-43bb-95ae-2a6c84361eed 

## GitHub Porject URL: https://github.com/maslla100/SVG-Logo-Maker

