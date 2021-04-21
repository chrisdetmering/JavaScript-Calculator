
function getCalculatorValues() {
    
    const calcDisplay = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');

    let valuesArray = [];
    let currentValue = 0;
        
    for (number of numbers) {
        number.addEventListener('click', (e) => {
        const getNumbers = e.target.id;
        valuesArray.push(getNumbers);
        calcDisplay.textContent = valuesArray.join('');
        currentValue = calcDisplay.textContent;
        console.log(currentValue);
        })
       
    } 
}
getCalculatorValues()

function getMemoryOperators () {
    const operators = document.querySelectorAll('.memory-operator');
    for (operator of operators) {
        operator.addEventListener('click', (e) => {
           const getOperators = e.target.id;
           switch (getOperators) {
               case 'clear':
                   alert('clear')
                   break;
               case 'memory-recall':
                   alert('memory-recall')
                   break;    
                case 'add-memory':
                    alert('add-memory ')
                    break;
                case 'remove-memory':
                    alert('remove-memory')
                    break;    
           }
        })
    } 
}
getMemoryOperators()

function getMathOperators () {
    const operators = document.querySelectorAll('.math-operator');
    for (operator of operators) {
        operator.addEventListener('click', (e) => {
           const getOperators = e.target.id;
           switch (getOperators) {
               case 'add':
                   alert('add')
                   break;
               case 'subtract':
                   alert('subtract')
                   break;    
                case 'multiply':
                    alert('multiply')
                    break;
                case 'divide':
                    alert('divide')
                    break;    
                case 'equals':
                    alert('equals')
                    break;        
           }
        })
    } 
}
getMathOperators()