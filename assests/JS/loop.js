
let cores = ['azul','amarelo','vermelho','laranja']
for(let i = 0; i < cores.length ; i++){
    console.log(cores[i])
}

for(let i in cores){
    console.log(cores[i])
}

for(let cor of cores){
    console.log(cor)
}

let jogadores = [
    {nome: 'Ragnar', nivel: 95},
    {nome:'Guardian', nivel:78},
    {nome:'Ricjs', nivel:88}
]

for(let player of jogadores){
    console.log(`O jogador ${player.nome} Tem o nivel igual a ${player.nivel}`)
}

jogadores.sort((a,b) => {
    if(a.nivel > b.nivel){
        return 1
    } else if (a.nivel < b.nivel){
        return -1
    }else{
        return 0
    }
})

console.log(jogadores)

let colors = ['vermelho','amarelo','laranja','azul','verde']


let moreColors = cores.filter(cor => {
    return cor.length > 6
})

console.log(moreColors)