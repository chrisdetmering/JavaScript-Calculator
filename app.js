
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