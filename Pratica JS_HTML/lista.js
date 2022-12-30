// Elemento que serao manipulados 
const lista = document.querySelector('ul');
const input = document.querySelector('input');
//funçoes
function handlekeyup(e){
    if(e.key === 'Enter'){
        const newLi = document.createElement('li');
        newLi.innerHTML = input.value;
         lista.appendChild(newLi)

         input.value = ''
}
}
// Eventos
input.addEventListener('keyup', handlekeyup);


