const calcDisplay = document.getElementById('display');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let memory = '';

document.getElementById('decimal').addEventListener('click', handleDecimal);

function handleDecimal () {
    if (!operator && !haveDecimal(firstOperand)) {
        firstOperand += '.';
        calcDisplay.textContent = firstOperand;
        return; 
    } 
    
    if (haveDecimal(secondOperand) && operator){
        secondOperand += '.';
        calcDisplay.textContent = secondOperand;
    }
}

document.querySelectorAll('.numbers')
.forEach(numberButton =>  {
    numberButton.addEventListener('click', () => {
        const number = numberButton.id
        if(!operator) {
            firstOperand += number;
            calcDisplay.textContent = firstOperand;
            return; 
        }

        if (firstOperand && operator) {
            secondOperand += number;
            calcDisplay.textContent = secondOperand;
        }
    })
})

document.querySelectorAll('.operator')
.forEach(operatorButton => {
operatorButton.addEventListener('click', (e) => {
        const selectedOperator = e.target.id;
        
        if (firstOperand && !operator) {
            operator = selectedOperator;
            return; 
        }
        if (secondOperand) {
            const result = calculate();
            firstOperand = result;
            operator = selectedOperator;
            secondOperand = '';
            calcDisplay.textContent = firstOperand;   
        }
        
    });
}) 

document.querySelectorAll('.memory-operator')
.forEach(memoryButton => {
memoryButton.addEventListener('click', (e) => {
    const memoryOperator = e.target.id;
    
    switch(memoryOperator) { 
        case 'add-memory':
            memory = add(memory, calcDisplay.textContent)
            break;
        case 'subtract-memory':
            memory = subtract(memory, calcDisplay.textContent)
            break;
        case 'memory-recall':
            if (!memory) {
                calcDisplay.textContent = '0'
            } else {
                firstOperand = memory; 
                secondOperand = ''; 
                operator = '';
                calcDisplay.textContent = firstOperand;
            } 
            break;     
        }
    })
})

document.querySelector('.equals') 
.addEventListener('click', (e) => {
    if (secondOperand){ 
        const result = calculate();
        firstOperand = result;
        operator = '';
        secondOperand = '';
        calcDisplay.textContent = firstOperand;   
    }
})

document.querySelector('.clear')
.addEventListener('click', (e) => {
    calcDisplay.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
}) 

function calculate() {
    switch (operator) {
        case 'add':
            return add(firstOperand, secondOperand);
        case 'subtract':
            return subtract(firstOperand, secondOperand);       
        case 'multiply':
            return multiply(firstOperand, secondOperand);
        case 'divide':Calculator
            return divide(firstOperand, secondOperand);                    
    }
}

function add(numOne, numTwo) {
    return `${Number(numOne) + Number(numTwo)}`; 
}
function subtract(numOne, numTwo) {
    return `${Number(numOne) - Number(numTwo)}`;
}
function multiply(numOne, numTwo) {
    return `${Number(numOne) * Number(numTwo)}`;
}
function divide(numOne, numTwo) {
    return `${Number(numOne) / Number(numTwo)}`;
}


//UTIL 
function haveDecimal(numberString) {
    return numberString.indexOf('.') > -1;
}