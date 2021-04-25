
const calcDisplay = document.getElementById('display');

let firstOperand = '';
let secondOperand ='';
let operator = '';

let memory = '';


function setOperands() {
    
    document.querySelectorAll('.numbers')
    .forEach(numberButton =>  {
        numberButton.addEventListener('click', (e) => {
            const decimalButton = document.getElementById('.');
            const number = numberButton.id
            if(!operator) {
               if (decimalButton){
                    if (firstOperand.includes(decimalButton.id)) {
                         return decimalButton.disabled;
                    }else {
                        firstOperand += number;
                        calcDisplay.textContent = firstOperand;
                    }
                } else {
                    firstOperand += number;
                    calcDisplay.textContent = firstOperand;
                }
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
       
        })
    })
}
setMathOperators()

// function setMemoryOperators() {
//     document.querySelectorAll('.memory-operator')
//     .forEach(memoryButton => {
//     memoryButton.addEventListener('click', (e) => {
//         const memoryOperator = e.target.id;
//         operator = memoryOperator;
        
//         switch(operator) { 
//             case 'add-memory':
//                 memory += calcDisplay.textContent;
//             case 'subtract-memory':
//                 memory -= calcDisplay.textContent;
//             case 'memory-recall':
//                 calcDisplay.textContent = memory;

//         }
//        console.log(memoryOperator)
//        console.log(memory)
//         })
//     })
// }
// setMemoryOperators()


function setEqualsButton(){
    document.querySelector('.equals') 
    .addEventListener('click', (e) => {
        const equalsButton = e.target.id;
        if (equalsButton) {
            answer = eval(calculate())
            calcDisplay.textContent = answer;
            firstOperand = calcDisplay.textContent;
            secondOperand = '';
            operator = '';
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
