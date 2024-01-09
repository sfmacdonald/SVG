import inquirer from 'inquirer';
import fs from 'fs';
import { createCircle, createTriangle, createSquare } from './lib/shapes.mjs'; // Import shape functions from shapes.js

function createSVG(text, textColor, shape, shapeColor) {
 const width = 200;
 const height = 200;
  
 let shapeElement = ''; // Initialize an empty string for the shape element

 // Determine the shape element based on the user's choice
 if (shape === 'circle') {
    shapeElement = createCircle(); // Use createCircle function from shapes.js
 } else if (shape === 'triangle') {
    shapeElement = createTriangle(); // Use createTriangle function from shapes.js
 } else if (shape === 'square') {
    shapeElement = createSquare(); // Use createSquare function from shapes.js
 }
  
 const encodedText = encodeURIComponent(text); // Encode the text
  
 const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <style>
        .text {
          fill: ${textColor};
        }
        .shape {
          fill: ${shapeColor};
        }
      </style>
      <g class="shape">
        ${shapeElement} <!-- Insert the shape element here -->
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" class="text">${encodedText}</text>
      </g>
   </svg>`;
   
// Return the generated SVG code   
 return svg; 
}

inquirer
 .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters:',
      validate: (input) => {
        if (input.length > 0 && input.length <= 3) {
          return true;
        }
        return 'Please enter between 1 and 3 characters.';
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hex):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hex):',
    },
  ])
 .then((answers) => {
    const { text, textColor, shape, shapeColor } = answers;
    const svgCode = createSVG(text, textColor, shape, shapeColor);

    // Make sure the svgCode variable is defined before passing it to the writeFileSync function
    if (svgCode) {
      fs.writeFileSync('logo.svg', svgCode);
      console.log('Generated logo.svg');
    } else {
      console.error('The SVG code was not generated correctly.');
    }
 });
