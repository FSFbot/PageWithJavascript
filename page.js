// Elementos que serao usados

let button = document.querySelector('.buton')

//Funcoes usadas
function altColor(){
    const h1 = document.querySelector('h1')
    if(h1.style.background == 'crimson' ){
        h1.style.background = 'blue';
        h1.style.color = 'yellow';
        h1.style.fontSize = '40px'
    }else{
        h1.style.background = 'crimson';
        h1.style.color = 'white';
        h1.style.fontSize = '25px'
    }
}

function altTxt(){
    let altTxt = document.querySelector('.text')
        if(altTxt.style.background == 'white'){
            altTxt.style.background = 'rgb(75,0,130)';
            altTxt.style.borderRadius = '10px';
            altTxt.style.color = 'white';
            altTxt.style.fontFamily = 'courier'
        }else{
        altTxt.style.background = 'white';
        altTxt.style.borderRadius = '0px'
        altTxt.style.color = 'black';
        altTxt.style.fontFamily = 'arial'
        }
}
const include = document.querySelector('.include')
const lista = document.querySelector('ul')
function addList(e){
    let ul = document.querySelector('.ul');
    if(e.key === 'Enter'){
        const newli = document.createElement('li');
        newli.innerHTML = include.value
        lista.appendChild(newli)
        inp.value = ''
    }
    

}
include.addEventListener('keyup',addList);