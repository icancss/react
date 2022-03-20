/** ANALYSIS
 * 1- Our first entry point to module is index.js
 * 2- But, beforehand, we start with "npm init" and create our package.json file
 *    by answering the questions.
 * 3- At index.js file, we import our functions from operations.js.
 * 4- At operations.js file, we create our 4 arithmetic operations (add/sub/multiply/divide).
 * 5- We export those functions with ES Module "export default {}".
 * 6- To load an ES module, set "type": "module" in the package.json.
 * 7- We call functions at index.js and write console the results.
 */

//First method to import functions
const calculator = require("./operations");

//Second method to import functions
//import {add, sub, multiply, divide} from "./operations.js";
// we also need  "type": "module" at package.json file to use this method.

//Write results at console
console.log(calculator.add(12,4));
console.log(calculator.sub(12,4));
console.log(calculator.multiply(12,4));
console.log(calculator.divide(12,4));