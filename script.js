// State variables and setters

let firstNumber, secondNumber, operator;
let currentDisplayValue = "";

function setCurrentDisplayValue(value) {
  currentDisplayValue = value;
  document.getElementById("currentDisplay").textContent = currentDisplayValue;
}

function setFirstNumber(value) {
  firstNumber = value;
}

function setSecondNumber(value) {
  secondNumber = value;
}

function setOperator(value) {
  operator = value;
}

//  Event handlers

function handleNumberButtonClick(event) {
  const value = event.target.textContent;
  const newCurrentDisplayValue = currentDisplayValue + value;
  setCurrentDisplayValue(newCurrentDisplayValue);
}

// Calculator functions

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      throw new Error("Invalid operator");
  }
}

// Initialize the calculator

function main() {
  document.querySelectorAll(".numberButton").forEach((button) => {
    button.addEventListener("click", handleNumberButtonClick);
  });
}

main();
