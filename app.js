// /*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display');
const calculator = document.querySelector('#calculator')
// /*-------------------------------- Variables --------------------------------*/
let currentInput = '';
// /*------------------------ Cached Element References ------------------------*/

// // /*----------------------------- Event Listeners -----------------------------*/



// // /*-------------------------------- Functions --------------------------------*/

calculator.addEventListener('click', (event) => {
    const target = event.target;
    
    
    if (target.classList.contains('button')) {
        const value = target.textContent;

        if (target.classList.contains('number')) {
          
            currentInput += value;
            display.textContent = currentInput;
        } else if (target.classList.contains('operator')) {
            if (value === 'C') {
                
                currentInput = '';
                display.textContent = '';
            } else {
                
                currentInput += ` ${value} `;
                display.textContent = currentInput;
            }
        } else if (target.classList.contains('equals')) {
             const result = eval(currentInput);
                display.textContent = result;
                currentInput = result.toString();
            } 
            }
        }
    
);
