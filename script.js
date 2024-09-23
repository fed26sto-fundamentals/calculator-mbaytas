// State variables and setters

let firstNumber, secondNumber, operator;
let historyDisplayValue = "";
let currentDisplayValue = "";

function setCurrentDisplayValue(value) {
  currentDisplayValue = value;
  document.getElementById("currentDisplay").textContent = currentDisplayValue;
  console.log("Current display value set to: ", currentDisplayValue);
}

function setHistoryDisplayValue(value) {
  historyDisplayValue = value;
  document.getElementById("historyDisplay").textContent = historyDisplayValue;
  console.log("History display value set to: ", historyDisplayValue);
}

function setFirstNumber(value) {
  firstNumber = parseInt(value);
  console.log("First number set to: ", firstNumber);
}

function setSecondNumber(value) {
  secondNumber = parseInt(value);
  console.log("Second number set to: ", secondNumber);
}

function setOperator(newOperator) {
  // No numbers on screen
  if (
    currentDisplayValue === "" &&
    firstNumber === undefined &&
    secondNumber === undefined
  ) {
    console.warn("No numbers defined!");
    return;
  }
  // First number on screen, second number undefined
  if (
    currentDisplayValue.length > 0 &&
    firstNumber === undefined &&
    secondNumber === undefined
  ) {
    setFirstNumber(currentDisplayValue);
    setCurrentDisplayValue("");
    operator = newOperator;
    console.log("Operator set to: ", newOperator);
    setHistoryDisplayValue(firstNumber + " " + newOperator);
  }
  // First number on screen, second number on screen
  if (
    firstNumber &&
    currentDisplayValue.length > 0 &&
    secondNumber == undefined
  ) {
    setSecondNumber(currentDisplayValue);
    operator = newOperator;
    console.log("Operator set to: ", newOperator);
    const result = operate(operator, firstNumber, secondNumber);
    setCurrentDisplayValue("");
    setFirstNumber(result);
    setSecondNumber(undefined);
    setHistoryDisplayValue(result);
  }
  if (firstNumber && currentDisplayValue.length == 0 && isNaN(secondNumber)) {
    operator = newOperator;
    console.log("Operator set to: ", newOperator);
    setHistoryDisplayValue(firstNumber + " " + newOperator);
  }
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
    case "add":
      return add(a, b);
    case "subtract":
      return subtract(a, b);
    case "multiply":
      return multiply(a, b);
    case "divide":
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

  document.getElementById("addButton").addEventListener("click", () => {
    setOperator("add");
  });

  document.getElementById("subtractButton").addEventListener("click", () => {
    setOperator("subtract");
  });

  document.getElementById("multiplyButton").addEventListener("click", () => {
    setOperator("multiply");
  });

  document.getElementById("divideButton").addEventListener("click", () => {
    setOperator("divide");
  });
}

main();
