/*-------------------------------- Constants --------------------------------*/



const display = document.querySelector('.display');

const buttons = Array.from(document.querySelectorAll('.button.number'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            default:
                display.innerText += e.target.innerText;
        }
    })
});

const operands = Array.from(document.querySelectorAll('.button.operator'));
    
    operands.map( operand => {
    operand.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=': 
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            default:
                display.innerText += e.target.innerText;
    }
})
});




// const equals = document.querySelector('.button.equals');













/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

//        //this log is only for testing
//        if (button.innerText !== "=") {
//         screenDisplay.innerText += button.innerText
//        };
//        if (button.innerText === "=") {
//         screenDisplay.innerText = eval
//         (screenDisplay.innerText)
//        };
//        if (button.innerText === "C") {
//         screenDisplay.innerText = ""
//        };
//         //future logic to capture buttons value here
// });
// });

// operands.forEach((operand) => {
//     operand.addEventListener('click', (event) => {
//         if (operand.innerText === '*') {

//         }
//         //future logic
//     });
// });

// const calculator = document.querySelector('#calculator');
// calculator.addEventListener('click', (event) => {
//     if (event.target.classList.contains('number')) {
//         screenDisplay.innerText;
//     }
// });


// equals.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         console.log(event.target.innerText);
//     });
// });
/*-------------------------------- Functions --------------------------------*/




































// class Calculator {
//     constructor(screenDisplay, screenDisplayNew) {
//         this.screenDisplay = screenDisplay
//         this.screenDisplayNew = screenDisplayNew
//         this.clear()
//     }
//     clear() {
//         this.screenDisplayNew = ''
//         this.screenDisplay = ''
//         this.operation = undefined
//     }

//     delete() {

//     }
//     appendNumber(number) {
//         this.screenDisplay = number
//     }
//     chooseOperation(operation) {

//     }
//     compute() {

//     }
//     updateDisplay() {
//         this.screenDisplay.innerText = this.screenDisplay
//     }
// }


//     // } if (event.target.innerText === '*') {
//     //     num1 * num2;
   

// const calculator = new Calculator(screenDisplay, screenDisplayNew)

// buttons.forEach(button => {
//     button.addEventListener('click', () => {
//         calculator.appendNumber(button.innerText)
//         calculator.updateDisplay()
//     })
// });