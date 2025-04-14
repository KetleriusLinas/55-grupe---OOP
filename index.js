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
        this.isStanding = true;
    }

    // pavadinimas(parametru blokas) {
    //     logikos blokas
    // }

    hi () {
        return `Hi, my name is ${this.name}`;
    }
    intro () {
        return `Hi, my name is ${this.name}, my fur is ${this.furColor}, and i am ${this.age} years old.`
    }

    birthday () {
        // this.age++;
        // this.age = this.age + this.age; // kazkaip taip galima daryti viska
        return `Happy birthday ${this.name}, you are ${++this.age}, years old.`;
    }

    lostTail () {
        this.hasTail = false;
    }

    lostLeg () { 
        if (this.legsCount > 0) { // apsauga nuo minus legs. (-4 ir tt), kad butu logiska tiesiog iki 0 (kiek turi koju) 
        this.legsCount--;
        }
    }

    changePose() { 
        // this.isStanding = this.isStanding ? false : true; // su ternary sumazinta versija
        this.isStanding = !this.isStanding // dar labiau sumazinta 

        // if (this.isStanding) {
        //     this.isStanding = false;
        // } else {
        //     this.isStanding = true;
        // }
    }
// reikia gaunti nauja spalva kad ja pakeisti (parametras)
    changeFurColor (newColor) {
        this.furColor = newColor;
        return `${this.name} has ${this.furColor} fur.! updated version!`

    }
}
const rex = new Dog('Rex', 'black');
const brisius = new Dog('Brisius', 'white');


// console.log(brisius.changeFurColor('red')); // keicia metodus
// brisius.changeFurColor('red');


brisius.lostLeg();
brisius.lostLeg(); // minusuoja legsCount.
brisius.lostTail(); // issikvieciam losttail metoda
console.log(brisius);

rex.changePose();
rex.changePose();
rex.changePose();
// ant rex veikia ant brisiaus ne 


console.log(rex);
console.log(rex.hi());
console.log(brisius.hi());

console.log(rex.intro());
console.log(brisius.intro());
console.log();

console.log(rex.birthday());
console.log(brisius.birthday());
console.log(rex.birthday()); // jau 2
console.log(rex.birthday()); // 3
console.log(rex.birthday()); // 4 kiekviena karta prideda po viena ir issaugo atmintyje.
console.log();





console.log('labas'.split(''));

