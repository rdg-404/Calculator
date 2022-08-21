const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button")

buttons.forEach((item) => {
    item.onclick = () => {
        if(item.id == "clear"){
            display.innerText = '' //limpa os calculos
        }
        else if(item.id == 'backspace'){
            let string = display.innerText.toString()
            display.innerText = string.substr(0, string.length - 1) //retira um caracter 
        }
        else if(display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText) ///executa uma operação
        }
        else if(display.innerText == '' && item.id == 'equal'){
            display.innerText = 'Adicione alguma operação'; // exibe a mensagem de aviso
            setTimeout(() => (display.innerText = ''), 2000);
        }
        else{
            display.innerText += item.id;
        }
    }
})


const themeToggleBtn = document.querySelector('.theme-toggler');
const calculator = document.querySelector('.calculator');
const toggleIcon = document.querySelector('.toggler-icon');

let isDark = true;


themeToggleBtn.onclick = () => {
    calculator.classList.toggle('dark');
    themeToggleBtn.classList.toggle('active');
    isDark = !isDark; //varia entre os temas
}



