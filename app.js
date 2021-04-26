
const calcDisplay = document.getElementById('display');

let firstOperand = '';
let secondOperand ='';
let operator = '';

let memory = '';

function handleDecimal () {
    if (!operator && firstOperand.indexOf('.') === -1) {
        firstOperand += '.';
        calcDisplay.textContent = firstOperand;
    } else if (secondOperand.indexOf('.') == -1 && operator){
        secondOperand += '.';
        calcDisplay.textContent = secondOperand;
    }
}

document.getElementById('.').addEventListener('click', handleDecimal);

function setOperands() {
    
    document.querySelectorAll('.numbers')
    .forEach(numberButton =>  {
        numberButton.addEventListener('click', (e) => {
            const number = numberButton.id
            if(!operator) {
                firstOperand += number;
                calcDisplay.textContent = firstOperand
            }
            if (firstOperand && operator) {
                secondOperand += number;
                calcDisplay.textContent = secondOperand;
            }
            
            console.log("firstOperand: ", firstOperand)
            console.log("secondOperand: ", secondOperand)
        })

    })
}
setOperands()


function setMathOperators() {
    document.querySelectorAll('.operator')
    .forEach(operatorButton => {
    operatorButton.addEventListener('click', (e) => {
        const selectedOperator = e.target.id;
     
        if (firstOperand) {
        operator = selectedOperator;
        } 
        if(secondOperand){
            if (operator) {
            answer = eval(calculate())
            calcDisplay.textContent = answer;
            firstOperand = calcDisplay.textContent;
            secondOperand = '';
            operator = selectedOperator;
            }
        }
       
       
        })
    })
}
setMathOperators()

function setMemoryOperators() {
    document.querySelectorAll('.memory-operator')
    .forEach(memoryButton => {
    memoryButton.addEventListener('click', (e) => {
        const memoryOperator = e.target.id;
        operator = memoryOperator;
        
        switch(operator) { 
            case 'add-memory':
                memory += calcDisplay.textContent;
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
               firstOperand = memory;
               break;
                }
        }
       console.log(memoryOperator)
       console.log(memory)
        })
    })
}
setMemoryOperators()

function setEqualsButton(){
    document.querySelector('.equals') 
    .addEventListener('click', (e) => {
        const equalsButton = e.target.id;
        if (equalsButton) {
            if (!operator) {
            equalsButton.disabled = true;
            }else { 
            answer = eval(calculate())
            calcDisplay.textContent = answer;
            firstOperand = calcDisplay.textContent;
            secondOperand = '';
            operator = '';
            }
        }
          
    console.log(answer);
    })
}

setEqualsButton()

function setClearButton() {
    document.querySelector('.clear')
    .addEventListener('click', (e) => {
        const clearButton = e.target.id;
        if (clearButton) {
            calcDisplay.textContent = '0';
            firstOperand = '';
            secondOperand = '';
            operator = '';
        }
    }) 
}
setClearButton()

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
