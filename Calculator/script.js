TODO:
/*
1. numbers clicked appear on screen
2. detect if button clicked is number or clear
2. operands click take the number on the screen and DO the thing to the next number(s) clicked
3. the doing doesn't take place until the user clicks equals, signaling that they have finished adding numbers in
4. the equals sign demonstrates the sum or product of the numbers and the operand
5. the C button hard refreshes and clears the calculator
6. this means that number buttons signal buttons moving to screen, operand buttons signal 


*/


var count = 0;
var start = "0";
var pendingOperation = "";
const nums = [];
const screen = document.querySelector(".screen");
const addButton = document.getElementById("addition")



//this is where: setting up operations
const operations = {
    add: (num1, num2) => add(num1,num2),
    subtract: (num1,num2) => subtract(num1,num2),
    division: (num1,num2) => division(num1,num2),
    multiply: (num1,num2) => multiply(num1,num2),
}

function add = (num1, num2) => {
    return num1 + num2;
}

function subtract = (num1, num2) => {
    return num1 - num2;
}

function division = (num1, num2) => {
    return num1/ num2;
}

function multiply = (num1, num2) => {
    return num1 * num2;
}





console.log(count)
/*const math = () =>{
    if (typeOf === NaN) {
        return 0
    } else {
        return number 
    }
    
}*/

const click = () => {
    console.log("clicked")
    if(isNaN(parseInt)) {
        doSymbol;
    } else {
        doNumber;
    }
    rerender();
}

const onNumberButtonClick = e => {
    const num = e.target.innerText
    screen.innerText = num
    nums.push(num);
}

const doSymbol = (value) => {
    if(value === "C"){
        count = 0
        start = "0"
    } else if (value === "÷"){

    }
}

function rerender() {
    screen.innerText = start;
  }

const init = () => {
    Array.from(document.getElementsByClassName('calc-button')).forEach(btn => btn.addEventListener('click', onNumberButtonClick))
    addButton.addEventListener("click", () => pendingOperation= 'add')
}
init();

//if number operator number and equal 
// but if equals or operator is clicked before numbers are clicked ===zero

// add classname to numbers (numberBtn) and classname to (operand)
// number button click event listener 
// if click is second num
//if so, perform operation using perator from
//set nums []
//set result to screen.innerText
//else set screen inner to e.target.innerText and add to nums