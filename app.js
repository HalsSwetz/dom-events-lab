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



//tried a few different stategies to write this code, the 
//one i used seemed like the most straighforward way to get a functioning
//calculator by using eval()




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































