// class (klase) --> object (objektas)
// blyno receptura --> iskpeti blyna (valgomas daiktas)
// namo brezinys --> namas
// taisykliu rinkinys/schema --> galima pagaminti normlu daikta.

// vienas budas
// class Dog { // ale receptura
//     constructor(name, furColor) {
//         // console.log('aaaaaaa'); // pasileidzia kiekviena karta kai kuriamas naujas klases objectas
//         // console.log(vardas);
//         this.name = name;
//         this.furColor = furColor;
//         this.age = 0;
//         this.legsCount = 4;
//         this.hasTail = true;
//     }
// }

// const rex = new Dog('Rex', 'black');
// const brisius = new Dog('Brisius', 'white');


// console.log(rex.name);
// console.log(rex.age);

// console.log(brisius.furColor);
// console.log(brisius.legsCount);

console.log('---------kitas budas---------');

// kitas budas
class Dog { 
    constructor(name, furColor) {

        this.name = name;
        this.furColor = furColor;
        this.age = 0;
        this.legsCount = 4;
        this.hasTail = true;
    }
}

const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');


console.log(rex.name);
console.log(rex.age);

console.log(brisius.furColor);
console.log(brisius.legsCount);
