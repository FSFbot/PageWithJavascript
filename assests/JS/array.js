let listas = ['felipe', 27, ['xx','yy']]

console.log(listas[2][0])

// Operaçoes entre arrays
let bolo = ['farinha', 'ovo', 'leite', 'fermento'];

console.log(`Total de ingredientes ${bolo.length}`) // retornando quantidadde de itens dentro do array

bolo.push('Açucar'); // adiciona itens em uma lista
bolo.push('Maça') // adiciona itens em uma lista





console.log(`Total de ingredientes ${bolo.length}`)
console.log(bolo)
bolo.pop() // remove o ultimo item
console.log(bolo)

// Removendo o primeiro item

bolo.shift()
console.log(bolo)
// Exercicios de array

let carros = ['bmw', 'Ferrari', 'Mercedes']
let x = 1;

console.log(carros[x])
const index = carros.indexOf('Ferrari');
if( index !== -1){
    carros[index] = 'Audi';
}

console.log(carros);

carros.push('Volvo')

console.log(carros);

console.log(`Nesta lista possuimos ${carros.length} Carros`)

