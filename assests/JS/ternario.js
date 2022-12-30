let age = 12;

let resposta = age>= 18 ? 'Maior de Idade':'Menor de idade';
console.log(resposta)
// Praticando com Switch

let worker = 'policial'

switch(worker){
    case 'fiscal':
        console.log('Sua camisa e amarela');
        break;
    case 'policial':
        console.log('sua camisa e azul');
        break;
    case 'bombeiro':
        console.log('sua camisa e vermelha');
        break;
    default:
        console.log('nao achei essa profissao');
        break;
}


let nome = 'joar'

if(nome == 'Felipe'){
    console.log('Acesso concedido');
}else{
    console.log('Acesso negado')
}