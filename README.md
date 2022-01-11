# Shopping Cart

### Description

This is a shopping cart I developed using JavaScript/NodeJS and Jest as the test framework. 
You can create products, add products to the shopping cart, calculate tax and the total price.

### Project Requirements
* NodeJS
  * If you don’t have NodeJS installed please follow this [link](https://nodejs.org/en/download/) to download and install according to your environment.
* IDE
  * You can use any IDE or Text Editor to view and edit the source code. Preferably Microsoft Visual Studio Code. Follow this [link](https://code.visualstudio.com/download) to download if you don’t have any.

### Project Structure
* You can find all the JavaScript files in the root directory of the project.
* All test files are in the ``` __tests__ ``` folder.
  * Unit tests for shopping-cart are in the ``` shopping-cart.test.js ``` file.
  * Unit tests for cart-item are in the ``` cart-item.test.js ``` file.
  * Test scenarios given in the assignment are in the ``` shopping-cart.integration.test.js ``` file.
* One ``` .bat ``` and a ``` .sh ``` file is in the root directory which you can use to run all test cases. 
* README file is in the root directory.

### How to setup the project
* Install NodeJS and a text editor if you haven’t already.
* Open the project in the text editor.
* Open a terminal window and go to the root directory of the project. 
* Then run ``` npm install ``` command in the terminal.
* Wait until the command completes running. It will install all the dependencies that you need to run the project.
* Now you are ready to run the project.

### How to run the project
* Open terminal, go to the root directory of the project and run following commands to run the project.
  * ``` npm test ``` - to run all the test cases at once.
  * ``` npm test “file-name-of-the-test-case” ``` - to run a particular test file.
* If you want to find the test coverage,
  *Go to the root directory of the project and run ``` npm run test-coverage ``` command in the terminal.
  
### Troubleshoot
* Following are the common errors that might occur when you try to run the code.
  * _‘npm’ is not recognized as an internal or external command_.
    * If you get this error you might not have NodeJS installed on your machine or there should be a problem with your system environment variables. Please try re-installing           NodeJS or setting your environment variables properly.
  * _'jest' is not recognized as an internal or external command_.
    * If you get this error there might be a problem with Jest installation. Delete your node_modules folder and run ``` npm install ``` again or try running ``` npm install -g jest ``` command.
  * If you are unable to run the ``` run-tests.sh ``` file due to permission error. Please grant execuion permission to ``` run-tests.sh ``` and re-run.

