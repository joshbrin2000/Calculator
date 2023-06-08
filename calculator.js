let input = 0;
let operator = 0;
let operand = 0;
let divisor = 0;
let subtractor = 0;

function idCheck(id, value){
    //console.log(id);
    //console.log(value);
    if (id === 'number'){
        if (input === 0){
            input = +value;
            //console.log(input);
        }
        else{
            input += value;
            input = Number(input);
            //console.log(input);
        }
        document.getElementById('output').value = input;
    }
    else if (id === 'zero'){
        if (input !== 0){
            input += value;
            input = Number(input);
            //console.log(input);
        }
        document.getElementById('output').value = input;
    }
    else if (id == 'posneg'){
        input = -input;
        document.getElementById('output').value = input;
        //console.log(input);
    }

}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        idCheck(button.className, button.value);
    });
});