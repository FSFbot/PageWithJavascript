function clicou(){
    const teste = document.querySelector('#teste')
    teste.innerHTML = 'Tudo bem Seu Voto foi Retirado'
}

let botao = document.querySelector('.botao');
botao.addEventListener("click", ()=> {
    clicou();
})
// usabndo metodo de onclick
function vote(){
    const teste = document.querySelector('#teste')
    teste.innerHTML = "Parabens Voce Votou!! "
}
// Adicionando coisas na lista
function clicou_1(){
    const add = document.querySelector('.mark');
    const ul = add.querySelector('ul')


   const newline = document.createElement('li');
   newline.innerText = 'Fui adicionado com sucesso'

   ul.appendChild(newline)

}
let botao_1 = document.querySelector('.botao_1');
botao_1.addEventListener("click", ()=> {
    clicou_1();
})

function remover(){
    let delet = document.querySelectorAll('.mark ul li');
    let r = delet
    delet.pop(r)

}

let delet = document.querySelector('.delet')
delet.addEventListener("click", ()=> {
    remover();
})

// Faça um elemento antes de depois usando os comandos de before a after

function add(){
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul')

    let newUl = document.createElement(ul)
    for(let i; i<5;i++){
        let newLi = document.createElement('li')
        newLi.innerHTML = "Item adicionado com id" + i;
        newUl.append(newLi);
    }
    ul.after(newUl);
}

