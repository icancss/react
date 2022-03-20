
// Add function to calculate the sum of two parameters
const add = (pNumber1, pNumber2) => {
  return pNumber1 + pNumber2;
};

// Sub function to calculate the extraction of two parameters
const sub = (pNumber1, pNumber2) => {
  return pNumber1 - pNumber2;
};

// Multiply function to calculate the multiplication of two parameters
const multiply = (pNumber1, pNumber2) => {
  return pNumber1 * pNumber2;
};

// Divide function to calculate the division of two parameters
const divide = (pNumber1, pNumber2) => {
  return pNumber1 / pNumber2;
};


//First method to export functions
module.exports = {
  add,
  sub,
  multiply,
  divide
};

//Second method to export functions
// export {
//   add,
//   sub,
//   multiply,
//   divide
// };