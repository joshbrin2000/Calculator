function idCheck(id){
    console.log(id)
}



const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        idCheck(button.className);
    });
});