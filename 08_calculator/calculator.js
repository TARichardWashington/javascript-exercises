const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach(element => {
    sum = sum + element;
  });
  return sum;
};

const multiply = function(array) {
  let total = array.pop();
  array.forEach(element => {
   total = total * element;
  });
  return total;
};

const power = function(num1, num2) {
  //return num1 ** num2; // does not work with bigInts
	return Math.pow(num1, num2);
};

const factorial = function(num) {
	if(num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num -1);
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
