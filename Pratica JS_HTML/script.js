function clicou(){
    const input = document.querySelector('input');
    const button = document.querySelector('button')
    if(input.getAttribute('type') == 'text'){
        input.setAttribute('type', 'password');
        button.innerText = 'Mostrar senha';
    } else{
        input.setAttribute('type','text');
        button.innerText = 'Ocultar Senha';
    }
}


function clicouColors(){
    const h1 = document.querySelector('h1');
    if(h1.style.backgroundColor == 'red'){
        h1.style.backgroundColor = 'blue';
        h1.style.fontSize = '60px';
    }else{
        h1.style.backgroundColor = 'red';
        h1.style.fontSize = '30px';
    }
}

function clicklList(){
    const li = document.querySelector('.click');
    li.classList.remove('verde');
    li.classList.add('vremelho');
    li.classList.toggle();
    li.classList.forEach();

}
// Funcoes de teclado

function soltou(event){
    console.log(event.key);
}

const input = document.querySelector('.evento');
input.addEventListerner('keyup', soltou)