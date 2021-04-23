
const calcDisplay = document.getElementById('display');
let firstOperand = '';
let secondOperand ='';
let operator = '';

document.querySelectorAll('.numbers')
.forEach(numberButton =>  {
    numberButton.addEventListener('click', () => {
        const number = numberButton.id
        if(!operator) {
            firstOperand += number;
            calcDisplay.textContent = firstOperand;
        }

        if(firstOperand && operator) {
            secondOperand += number;
            calcDisplay.textContent = secondOperand;
        }

        console.log("firstOperand: ", firstOperand)
        console.log("secondOperand: ", secondOperand)
    })

})

document.querySelectorAll('.operator')
.forEach(operatorButton =>{
operatorButton.addEventListener('click', (e) => {
    const selectedOperator = e.target.id;
     
    if (firstOperand) {
        operator = selectedOperator;
    }
    console.log(operator)
    })
})

document.querySelector('.equals') 
.addEventListener('click', (e) => {
    console.log('equals')
})

function calculate() {
    switch (operator) {
        case 'add':
            return add();
        case 'subtract':
            return subtract();       
        case 'multiply':
            return multiply();
        case 'divide':
            return divide();                    
    }
}

function add() {
    return `${Number(firstOperand)} + ${Number(secondOperand)}`;
}
function subtract() {
    return `${Number(firstOperand)} - ${Number(secondOperand)}`;
}
function multiply() {
    return `${Number(firstOperand)} * ${Number(secondOperand)}`;
}
function divide() {
    return `${Number(firstOperand)} / ${Number(secondOperand)}`;
}
