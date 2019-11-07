TODO:
/*
1. operands click take the number on the screen and DO the thing to the next number(s) clicked
2 the doing doesn't take place until the user clicks equals, signaling that they have finished adding numbers in
3. the equals sign demonstrates the sum or product of the numbers and the operand
4. the C button hard refreshes and clears the calculator
5. this means that number buttons signal buttons moving to screen, operand buttons signal 
*/


var count = 0;
var start = "0";
var pendingOperation = "";
const nums = [];
const screen = document.querySelector(".screen");
const addButton = document.getElementById("add")
const subtractButton = document.getElementById("subtract")
const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("multiply")
const clearButton = document.getElementById("clear")
const equalsButton = document.getElementById("equals")


//this is where: setting up operations
const operations = {
    add: (num1, num2) => add(num1,num2),
    subtract: (num1,num2) => subtract(num1,num2),
    divide: (num1,num2) => divide(num1,num2),
    multiply: (num1,num2) => multiply(num1,num2),
}

const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const divide = (num1, num2) => {
    return num1/ num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const onNumberButtonClick = e => {
    const num = e.target.innerText
        screen.innerText = num
        nums.push(num);
}

const doMath = (nums, pendingOperation) => {
    const result = operations[pendingOperation](parseInt(nums[0]),parseInt(nums[1]))
    screen.innerText = result
}

const clearMe = () =>{
    nums.splice(0);
    pendingOperation=""
    screen.innerText = 0

}

const rerender = () => {
    screen.innerText = start;
}

const init = () => {
    Array.from(document.getElementsByClassName('number')).forEach(btn => btn.addEventListener('click', onNumberButtonClick))
    addButton.addEventListener("click", () => pendingOperation= "add") 
    subtractButton.addEventListener("click", () => pendingOperation= "subtract")
    divideButton.addEventListener("click", () => pendingOperation= "divide")
    multiplyButton.addEventListener("click", () => pendingOperation = "multiply")
    equalsButton.addEventListener("click", () => doMath(nums, pendingOperation))
    clearButton.addEventListener("click", () => clearMe(nums, pendingOperation))
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



/*
FUTURE FEATURES:
CLEAR BUTTON
FIT ON SCREEN
MULTIPLE NUMBERS, MULTIDIGIT NUMBERS
ADD MORE OPERATIONS
DECIMAL POINT

overflow hidden

*/