class Person {
    steps = 0;
    constructor(nome, age){
        this.nome = nome;
        this.age = age

    }
    walk(){
        this.steps++
    }
    setAge(newAge){
        if(typeof newAge == 'number'){
            this.age = newAge;
        }else{
            console.log('Nao é aceito esse formato de idade')
        }
    }
}

let p1 = new Person('Felipe', 27)
let p2 = new Person('Noelia', 63)
let p3 = new Person('JP', 24)

p1.walk()
p1.walk()
p1.walk()
p1.walk()
console.log(p1.steps)