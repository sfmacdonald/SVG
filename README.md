# SVG-Logo-Creator
Command Line App For Creating Logos

## Table of Contents

- [Project Name](#svg-logo-creator)
- [Table of Contents](#table-of-contents)
- [Description](#description)
- [Features](#features)
- [Usage](#usage)
- [Testing](#testing)

## Description

The purpose of the application is to generate a simple logo via javascript and Inquirer by running commands in the terminal.

## Features

This terminal app has the following features and functions:

1. Ability to create a logo by asking the user via prompts what components they would like the final design of the logo to entail. These components include the following:
    - Letters:
        - The logo shall include a maximum count of three letters in the logo
    - Text Color:
        - The text shall have a designated color determined by the user by:
            - Entering a color keyword OR a hexadecimal number
    - Shape:
        The logo shall be one of three shapes which will be determined by the user. They include:
            - Circle
            - Triangle
            - Square
    - Shape Color:
        - The shape shall have a designated color determined by the user by:
            - Entering a color keyword OR a hexadecimal number

See attached screenrecording for demonstration: [insert MPG]
  
## Usage

The github repository may be found at [insert URL]










## Testing

Testing may be accomplished either manually or via automation (leveraging Jest) with test scripts.

1. To test the application manually:
    - Select the "index.mjs" file
    - Open the integrated terminal
    - In the command line, enter "node index.mjs"
    - The user shall be given prompts to answer
    - Once all prompts are completed, the file shall be created
    - Open the file and review the results to ensure that they match the prompts.


2. To test the application via automation:
    - Select the "shapes.test.js" file
    - Open the integrated terminal
    - In the command line, enter "npm test"
    - Automation shall be initiated
    - Results shall then populate with a pass or fail result


