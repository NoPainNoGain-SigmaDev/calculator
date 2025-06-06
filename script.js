//DOM elements
const display = document.getElementById("calculator-display");
const allBtns = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("btn-equal");
const addBtn = document.getElementById("btn-add");
const substractBtn = document.getElementById("btn-substract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");
const clearBtn = document.getElementById("btn-clear");
const deleteBtn = document.getElementById("btn-del");
const pointBtn = document.getElementById("btn-point");

//Global variables
let operation = "";
let numberA = 0;
let numberB = 0;
let operator = "";
let result = 0;
let isDecimal = false;

//Operations
const add = (a, b) => {
  return a + b;
};
const substract = (a, b) => {
  return a - b;
};
const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};

const operate = (numberA, numberB, operator) => {
  switch (operator) {
    case "add":
        
      result = add(numberA, numberB);
      break;
    case "sub":
      result = substract(numberA, numberB);
      break;
    case "div":
      result = divide(numberA, numberB);
      break;
    case "mul":
      result = multiply(numberA, numberB);
      break;
    default:
      result = parseFloat(operation);
      break;
  }
};
const updateOperation = (value) => {
  operation += value;
};
const updateDisplay = () => {
  display.textContent = operation;
};
const clear = () => {
  isDecimal = false;
  operation = "";
  operator = "";
  numberA = 0;
  numberB = 0;
  result = 0;
  updateDisplay();
};

//Adding numbers to the operation
allBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    updateOperation(e.target.value);
    updateDisplay();
  });
});

//Selecting operations
addBtn.addEventListener("click", () => {
  if (operator !== "") {
  } else {
    isDecimal = false;
    numberA = parseFloat(operation);
    operator = "add";
    operation = "";
    updateDisplay();
  }
});
substractBtn.addEventListener("click", () => {
  if (operator !== "") {
  } else {
    isDecimal = false;
    numberA = parseFloat(operation);
    operator = "sub";
    operation = "";
    updateDisplay();
  }
});
divideBtn.addEventListener("click", () => {
  if (operator !== "") {
  } else {
    isDecimal = false;
    numberA = parseFloat(operation);
    operator = "div";
    operation = "";
    updateDisplay();
  }
});
multiplyBtn.addEventListener("click", () => {
  if (operator !== "") {
  } else {
    isDecimal = false;
    numberA = parseFloat(operation);
    operator = "mul";
    operation = "";
    updateDisplay();
  }
});

//Adding decimal point
pointBtn.addEventListener("click", (e) => {
  if (isDecimal) {
    return;
  }
  isDecimal = true;
  updateOperation(e.target.value);
  updateDisplay();
});


deleteBtn.addEventListener("click", ()=>{
    let operationArr = [...operation];
    //If the point is removed the user should be able to add it again
    if(operationArr.pop() === "."){
        isDecimal=false;
    };
    operation = operationArr.join("");
    updateDisplay();
});

//Performing operations
equalBtn.addEventListener("click", () => {
  isDecimal = false;
  numberB = parseFloat(operation);
  operate(numberA, numberB, operator);
  operation = result;
  updateDisplay();
  operator = "";
});

clearBtn.addEventListener("click", clear);
