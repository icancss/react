const addition = (pNumber1, pNumber2) => {
  return pNumber1 + pNumber2;
};

const multiplication = (pNumber1, pNumber2) => {
  return pNumber1 * pNumber2;
};

//First export method
module.exports = {
  addition,
  multiplication,
};