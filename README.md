# SVG-Logo-Maker
SVG Logo Maker



## Project Name
 Professional README Generator

## Version
1.0.0 Deployment Date: 2024-01-07 Contributors: Luis Llamas

## Description

 When creating an open source project on GitHub, it’s important to have a high-quality README for the app. This should include what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions—this last part increases the likelihood that other developers will contribute to the success of the project.

This application can easily generate a README file by using a command-line application to generate one. This allows the project creator to devote more time working on the project.  This app will need to be downloaded and ran on the command line.  It is critical to install the inquirer package or the app will not run.   

## Technologies

This project was built using npm i inquirer@8.2.4 and JavaScript.  Versioning control on Github.  

## Installation
To install this project, download the repository files to your local machine.  Install npm inquirer and use the command line to run the JavaScript  Set up your Node.js project:

Initialize a new Node.js project with npm init.
Install Inquirer (npm install inquirer) for user input.
Install Jest (npm install jest --save-dev) for testing.
Set up your package.json to use Jest for testing ("test": "jest").Professional README Generator application.  

## Usage
To use this project, download the repository files to your local machine.  Install npm inquirer and use the command line to run the JavaScript  Professional README Generator application.  


The following video application's appearance and functionality:
 https://drive.google.com/file/d/1pdjFFOpE0m79njFIj-q9qTWRB73COz2E/view

## Code
URL to code: https://github.com/maslla100/READMEgenerator
















Object-oriented Programming Challenge: SVG Logo Maker
Your task is to build a Node.js command-line application that takes in user input to generate a logo and save it as an SVG fileLinks to an external site.. The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a .svg file.
Because this application won’t be deployed, you’ll need to provide a link to a walkthrough video that demonstrates its functionality and passes all of the tests. You’ll need to submit a link to the video and add it to the README of your project.
Refer to the Video Submission GuideLinks to an external site. on the Full-Stack Blog for additional guidance on creating a video.


Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
Your application should use JestLinks to an external site. for running the unit tests and InquirerLinks to an external site. for collecting input from the user. The application will be invoked by using the following command:

├── examples/           // Example svg file(s) created with the app
├── lib/                // Folder for classes or functions
    ├── shapes.js       // Exports `Triangle`, `Circle`, and `Square` classes
    ├── shapes.test.js  // Jest tests for shapes
    └── more...         // Additional files and tests
├── .gitignore          // Indicates which folders and files Git should ignore
├── index.js            // Runs the application using imports from lib/
├── package.json
└── README.md           // App description, link to video, setup and usage instructions
Make sure that you remove dist from the .gitignore file so that Git will track this folder and include it when you push up to your application's repository.
The application must include Triangle, Circle, and Square classes, as well as tests for each of these classes using Jest. While not a requirement, it is recommended that you place any common functionality and properties shared by the Triangle, Circle, and Square classes in a parent Shape class and use inheritance to reuse the code in the child classes.
Each shape class should be tested for a render() method that returns a string for the corresponding SVG file with the given shape color.
The following example test should pass:
const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
You may need to add additional files in the lib folder for handling user input, writing to a file, etc. Writing tests for these additional files is optional.


