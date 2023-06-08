let input = 0;
let operator = 0;
let operand = 0;
let divisor = 0;
let subtractor = 0;
pointToggle = true;

function idCheck(id, value){
    //console.log(id);
    //console.log(value);
    switch(id){
        case 'number':
            if (input === 0){
                input = +value;
                console.log(input);
            }
            else{
                input += value;
                input = Number(input);
                console.log(input);
            }
            break;
            
        case 'zero':
            if (input !== 0){
                input += value;
                //input = Number(input); this prevents adding 0 after decimal
                console.log(input);
            }
            break;

        case 'point':
            if (pointToggle === true){
                input += value;
                pointToggle = !pointToggle;  //need to work flag reraising
                console.log(input);
            }
            else{
                input += "";
                console.log(input);
            }
            break;

        case 'posneg':
            input = -input;
            console.log(input);
            break;

        case 'AC':
            input = 0;
            pointToggle = !pointToggle;
            break;  

        case 'modulo':
            break;
        
        case 'plus':
            break;

        case 'minus':
            break;
        
        case 'times':
            break;

        case 'divide':
            break;

        case 'equals':
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