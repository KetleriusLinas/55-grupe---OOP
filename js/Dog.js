import { Pet } from "./Pet.js";
// su extend nereikia to paties pasirasyto kodo jis atsines is Pet.js failo
export class Dog extends Pet {
    constructor (name, furColor) { 
        // this.name = name;
        // this.furColor = furColor;
        // this.legsCount = 4;
        // this.eyesCount = 2;
        super(name, furColor); // super construktorius 
        this.sound = 'au';
        this.emoji = '🐕';
    }
    // hi () {
    //     return `Hi, my name is ${this.name}.`
    // }
    // voice () {
    //     const sound = (' ' + this.sound).repeat(2);
    //     const emojies = this.emoji.repeat(2);
    //     return `${this.name}: ${sound} ${emojies}!`
    // }
}