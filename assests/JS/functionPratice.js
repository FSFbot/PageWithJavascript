function itsMe(){
    console.log('Minha idade e : ');
    console.log(27)
}

itsMe()

function somar(a,b){
    soma = a + b;
    console.log(`Resultado sera = ${soma}`);
}

somar(8,8)
let m2 = 3000
function calcularImovel(metragem,quartos){
    if(quartos == 1){
        let preco = metragem * m2
        console.log(`A casa custa : ${preco}`)
    }if (quartos == 2) {
        let preco = metragem * (m2 * 1.2)
        console.log(`A casa custa : ${preco}`)
    } else {
        let preco = metragem * (m2 * 1.5)
        console.log(`A casa custa : ${preco}`)
    }
}

let metragem = 120
let quartos = 3

calcularImovel(metragem,quartos)

// Crie uma funçao que valide o usuario e senha User: Pedro Senha: Laranja

function validate(user,password){
    if( user === 'Pedro' && password === 'Laranja'){
        console.log('Acesso concedido');
    }else{
        console.log('Seu acesso foi negado');
    }
}

let  user= 'Felipe';
let password = 'Betas'

validate(user,password)

// Arrow Functions

const prod = (x,y) => {
    let prod = x * y;
    console.log(`Resultado da sua multiplicaçao sera ${prod}`)
}

prod(4,3)

// Variaveis dentro da funçao
// existem variaveis locais e globais lembrando que variaveis locais tem peso maior que as variaveis globais

// Funçao dentre de Funçao

function sqdPlus(x,y){
    const sqd = (a) => {
        return a * a;
    }
    let sqdA = sqd(x);
    let sqdB = sqd(y);
    return sqdA + sqdB
}

console.log(sqdPlus(2,3));