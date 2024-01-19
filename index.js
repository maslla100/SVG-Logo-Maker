const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to start the application
function start() {
    console.log("SVG Logo Maker");

    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: function (value) {
                if (value.length <= 3) return true;
                return 'Please enter up to three characters.';
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hex):',
        }
    ])
        .then(answers => {
            const { text, textColor, shape, shapeColor } = answers;

            // Create the selected shape
            let svgShape;
            switch (shape) {
                case 'circle':
                    svgShape = new Circle();
                    break;
                case 'triangle':
                    svgShape = new Triangle();
                    break;
                case 'square':
                    svgShape = new Square();
                    break;
            }

            svgShape.setColor(shapeColor);

            // Generate the SVG content
            const svgContent = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${svgShape.render()}
        <text x="150" y="100" font-family="Verdana" font-size="35" fill="${textColor}" text-anchor="middle">${text}</text>
      </svg>
    `;

            // Save to logo.svg
            fs.writeFileSync('logo.svg', svgContent);
            console.log('Generated logo.svg');
        })
        .catch(error => {
            if (error.isTtyError) {
                console.log('Prompt couldn\'t be rendered in the current environment');
            } else {
                console.log('An error occurred:', error);
            }
        });
}

// Run the application
start();
