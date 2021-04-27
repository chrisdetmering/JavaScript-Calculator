const calcDisplay = document.getElementById('display');

let firstOperand = '';
let secondOperand = '';
let operator = '';
let memory = '';

function handleDecimal () {
    if (!operator && !isDecimal(firstOperand)) {
        firstOperand += '.';
        calcDisplay.textContent = firstOperand;
        return; 
    } 
    
    if (!isDecimal(secondOperand) && operator){
        secondOperand += '.';
        calcDisplay.textContent = secondOperand;
    }
}

document.getElementById('.')
.addEventListener('click', handleDecimal);

    
document.querySelectorAll('.numbers')
.forEach(numberButton =>  {
    numberButton.addEventListener('click', () => {
        const number = numberButton.id
        if(!operator) {
            firstOperand += number;
            calcDisplay.textContent = firstOperand
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

        if (firstOperand && operator && secondOperand){ 
            answer = calculate();
            firstOperand = answer
            secondOperand = '';
            operator = selectedOperator;
            calcDisplay.textContent = firstOperand;
            
        }
    })
}) 

document.querySelectorAll('.memory-operator')
.forEach(memoryButton => {
memoryButton.addEventListener('click', (e) => {
    const memoryOperator = e.target.id;
    operator = memoryOperator;
    
    switch(operator) { 
        case 'add-memory':
            memory = Number(memory) + Number(calcDisplay.textContent);
            calcDisplay.textContent = '0';
            operator = '';
            firstOperand = '';
            break;
        case 'subtract-memory':
            memory -= calcDisplay.textContent;
            calcDisplay.textContent = '0';
            operator = '';
            firstOperand = '';
            break;
        case 'memory-recall':
            if (!memory) {
                calcDisplay.textContent = '0'
            } else {
                calcDisplay.textContent = memory;
                firstOperand = calcDisplay.textContent;
                operator = '';
                break;
            }      
        }
    })
})



document.querySelector('.equals') 
.addEventListener('click', (e) => {
    if (firstOperand && operator && secondOperand){ 
        answer = calculate();
        firstOperand = answer;
        secondOperand = '';
        operator = '';
        calcDisplay.textContent = firstOperand;
    }
})

document.querySelector('.clear')
.addEventListener('click', () => {
    calcDisplay.textContent = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
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
    return `${Number(firstOperand) + Number(secondOperand)}`;
}
function subtract() {
    return `${Number(firstOperand) - Number(secondOperand)}`;
}
function multiply() {
    return `${Number(firstOperand) * Number(secondOperand)}`;
}
function divide() {
    return `${Number(firstOperand) / Number(secondOperand)}`;
}


//UTILS
function isDecimal(string) {
    return string.indexOf('.') > -1;
}