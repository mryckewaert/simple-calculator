// function calculator(){
//     const calculateBtn = document.getElementById('calculate');
//     let result = 0;
//     calculateBtn.addEventListener('click', () => {
//         const firstValue = parseInt(document.getElementById('firstValue').value, 10);
//         const operator = document.getElementById('operator');
//         const secondValue = parseInt(document.getElementById('secondValue').value, 10);
//         switch(operator){
//             case "+": 
//                 result = `${firstValue} + ${secondValue}`;
//                 break;
//             case "-": 
//                 console.log(firstValue - secondValue);
//                 break;
//             case "*":
//                 console.log(firstValue * secondValue);
//                 break;
//             case "/":
//                 console.log(firstValue / secondValue);
//                 break;
//             default:
//                 console.log("Invalid operator")
//                 break;
//         }
//         const text = 'The result is ' + result
//         calculateBtn.innerHTML = text
// });
// return calculator()
// }

const formul = document.getElementById('form');
const resultat = document.getElementById('resultat');
let result = 0;

formul.addEventListener('submit', (element) => {
    element.preventDefault();

    const firstValue = +document.getElementById('firstValue').value;
    const operator = document.getElementById('operator').value;
    const secondValue = +document.getElementById('secondValue').value;

    switch(operator){
        case "+": 
            result = firstValue + secondValue;
            break;
        case "-": 
            result = firstValue - secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break;
        case "/":
            if(secondValue === 0){
                result = "Error can't divide by 0"
            }
            else{
                result = firstValue / secondValue;
            }
            break;
        case "%":
            result = firstValue % secondValue;
            break;
        default:
            console.log("Invalid operator")
            break;
    }

    const text = `The result is ${result}`
    resultat.innerText = text
});