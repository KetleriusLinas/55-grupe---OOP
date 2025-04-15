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

import { Dog } from "./js/Dog.js";

const rex = new Dog ('Rex', 'black')

console.log(rex);
console.log(rex.hi());
console.log(rex.voice());
