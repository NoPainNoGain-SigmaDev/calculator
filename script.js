//DOM elements
const display = document.getElementById("calculator-display");
const allBtns = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("btn-equal");
const addBtn = document.getElementById("btn-add");
const substractBtn = document.getElementById("btn-substract");
const multiplyBtn = document.getElementById("btn-multiply");
const divideBtn = document.getElementById("btn-divide");

//Global variables
let operation= "";
let numberA = 0;
let numberB = 0;
let operator = "";
let result = 0;

//Operations
const add = (a,b)=>{
    return (a + b);
};
const substract = (a,b)=>{
    return (a - b);
};
const multiply = (a,b)=>{
    return (a * b);
};
const divide = (a,b)=>{
    return (a / b);
};


const operate = (numberA, numberB, operator)=>{
     switch (operator){
        case "add":
            result = add(numberA, numberB);
            break;
        default:
            break;
     }
};
const updateOperation = (value)=>{
    operation += value;
};  
const updateDisplay = ()=>{
    display.textContent = operation;
};

allBtns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        updateOperation(e.target.value);
        updateDisplay();
    });
});

addBtn.addEventListener("click", ()=>{
    numberA = parseInt(operation);
    operator = "add";
    operation = "";
    updateDisplay();
});


equalBtn.addEventListener("click", ()=>{
    numberB = parseInt(operation);
    operate(numberA, numberB, operator);
    operation = result;
    updateDisplay();
});


