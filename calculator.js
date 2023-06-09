let input = 0;
let numberList = [];
let operandList = [];
pointToggle = true;
let answerToggle = false;

function add(a, b){
    let sum = a + b;
    //console.log(`Sum: ${sum}`);
    return sum;
}

function subtract(a, b){
    let result = a - b;
    //console.log(`Substract: ${result}`);
    return result;
}

function multiply(a, b){
    let product = a * b;
    //console.log(`Multiply: ${product}`);
    return product;
}

function divide(a, b){
    if (b === 0){
        //console.log("Don't divide by zero, jerkass");
        return null;
    }
    else{
        let quotient = a / b;
        //console.log(`Divide: ${quotient}`);
        return quotient;
    }
}

function modulo(a, b){
    let remainder = a % b;
    //console.log(`Modulo: ${remainder}`);
    return remainder;
}

function operate(){
    //console.log(numberList);
    //console.log(operandList);
    //console.log('in here')
    let a = numberList.shift();
    //console.log(`a: ${a}`);
    while (operandList.length > 0){
        let b = numberList.shift();
        //console.log(`b: ${b}`);
        let op = operandList.shift();
        //console.log(`op: ${op}`);
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
    //console.log(a)
    return a;
}

function idCheck(id, value){
    //console.log(id);
    //console.log(value);
    switch(id){
        case 'number':
            if (input <= 0 || answerToggle){
                input = +value;
            }
            else{
                input += value;
                input = Number(input);
                //console.log(input);
            }
            if (answerToggle){
                answerToggle = !answerToggle;
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
            operandList.push('%');
            numberList.push(input);
            input = 0;
            pointToggle = !pointToggle;
            break;
        
        case 'plus':
            operandList.push('+');
            numberList.push(input);
            input = 0;
            pointToggle = !pointToggle;
            break;

        case 'minus':
            operandList.push('-');
            numberList.push(input);
            input = 0;
            pointToggle = !pointToggle;
            break;
        
        case 'times':
            operandList.push('*');
            numberList.push(input);
            input = 0;
            pointToggle = !pointToggle;
            break;

        case 'divide':
            operandList.push('/');
            numberList.push(input);
            input = 0;
            pointToggle = !pointToggle;
            break;

        case 'equals':
            numberList.push(input);
            input = operate();
            answerToggle = !answerToggle;
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