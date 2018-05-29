var add = function(number1, number2) {
  return number1 + number2;
};

var sub = function(number1, number2){
  return number1 - number2;
};

var prod = function(number1, number2){
  return number1 * number2;
};

var quot = function(number1, number2){
  return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter another number:"));

alert(quot(number1, number2));
