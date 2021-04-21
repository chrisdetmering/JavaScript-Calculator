
function getCalculatorValues() {
    
    const calcDisplay = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');

    let currentValue = [];
        
    for (number of numbers) {
        number.addEventListener('click', (e) => {
        const getNumbers = e.target.id;
        currentValue.push(getNumbers);
        calcDisplay.textContent = currentValue.join('');
        
        console.log(currentValue);
        })
       
    } 
}
getCalculatorValues()

function getCalculatorOperators () {
    const operators = document.querySelectorAll('.operator');

    for (operator of operators) {
        operator.addEventListener('click', (e) => {
           const getOperators = e.target.id;
           console.log(getOperators)
        })
    } 
}
getCalculatorOperators()