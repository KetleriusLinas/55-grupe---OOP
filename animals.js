/*

Animal:
    Pet:
        Dog
        Cat
        Hamster
    bird:
        Parrot
        Hummingbird
        Eagle
    fish:
        Shark
        Dolphin
        Tuna

*/

import { Cat } from "./js/Cat.js";
import { Dog } from "./js/Dog.js";
import { Hamster } from "./js/Hamster.js";
console.log('------Dog------');
const rex = new Dog ('Rex', 'black')

console.log(rex);
console.log(rex.hi());
console.log(rex.voice());

console.log();
console.log('------Cat------');

const rainis = new Cat ('Rainis', 'mixed')
console.log(rainis);
console.log(rainis.hi());
console.log(rainis.voice());
console.log();

console.log('------Hamster------');
const keksas = new Hamster ('Keksas', 'brown')
console.log(keksas);
console.log(keksas.hi());
console.log(keksas.voice());
console.log();

