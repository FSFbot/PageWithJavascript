let personagem = {
    nome : 'Ragnar',
    classe : 'Barbaro',
    idade : 250,
    atributos :{
        forca : 40,
        velocidade : 12,
        inteligencia : 10,
        resistencia : 23
    },
    armas : ['Machado de luz','machado da sombra'],
    Magia: function (){
        magia = this.atributos.forca + this.atributos.resistencia
        return magia
    }

}
// caracteristica : valor 

console.log(`O aventureiro ${personagem.nome} possui a classe ${personagem.classe} ele ja se aventurou por ${personagem.idade} veroes`);

console.log(`Como grandes qualidades ele possui a força de ${personagem.atributos.forca} e tambem sua resistencia de ${personagem.atributos.resistencia}`);

console.log(`na mao esquerda ele carrega ${personagem.armas[0]} e na sua mar direita fica ${personagem.armas[1]}`)

personagem.nome = 'Bjnor'


console.log(personagem.Magia())