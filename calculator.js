let input = 0;
let numberList = [];
let operandList = [];
pointToggle = true;

function add(a, b){
    let sum = a + b;
    return sum;
}

function subtract(a, b){
    let result = a - b;
    return result;
}

function multiply(a, b){
    let product = a * b;
    return product;
}

function divide(a, b){
    if (b === 0){
        console.log("Don't divide by zero, jerkass");
        return null;
    }
    else{
        let quotient = a / b;
        return quotient;
    }
}

function modulo(a, b){
    let remainder = a % b;
    return remainder;
}

function operate(){
    let a = numberList.shift();
    while (operandList.length > 0){
        let b = numberList.shift();
        let op = operandList.shift();
        switch(op){
            case '+':
                a = add(a, b);
                break;
            case '-':
                a = subtract(a, b);
                break;
            case '*':
                a = multiply(a, b);
                break;
            case '/':
                a = divide(a, b);
                if (a == null){
                    operandList = [];
                    a = 'NaN';
                }
                break;
            case '%':
                a = modulo(a, b);
                break;
            default:
                break;
        }
    }
    document.getElementById('output').value = a;
}

function idCheck(id, value){
    //console.log(id);
    //console.log(value);
    switch(id){
        case 'number':
            if (input === 0){
                input = +value;
                //console.log(input);
            }
            else{
                input += value;
                input = Number(input);
                //console.log(input);
            }
            break;
            
        case 'zero':
            if (input !== 0){
                input += value;
                //input = Number(input); this prevents adding 0 after decimal
                //console.log(input);
            }
            break;

        case 'point':
            if (pointToggle === true){
                input += value;
                pointToggle = !pointToggle;  //need to work flag reraising
                //console.log(input);
            }
            else{
                input += "";
                //console.log(input);
            }
            break;

        case 'posneg':
            input = -input;
            //console.log(input);
            break;

        case 'AC':
            input = 0;
            pointToggle = !pointToggle;
            break;  

        case 'modulo':
            numberList.append('%');
            numberList.append(input);
            input = 0;
            break;
        
        case 'plus':
            numberList.append('+');
            numberList.append(input);
            input = 0;
            break;

        case 'minus':
            numberList.append('-');
            numberList.append(input);
            input = 0;
            break;
        
        case 'times':
            numberList.append('*');
            numberList.append(input);
            input = 0;
            break;

        case 'divide':
            numberList.append('/');
            numberList.append(input);
            input = 0;
            break;

        case 'equals':
            operate();
            break;

        default:
            break;

    }
    document.getElementById('output').value = input;
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        idCheck(button.className, button.value);
    });
});