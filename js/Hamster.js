import { Pet } from "./Pet.js";

export class Hamster extends Pet {
    constructor (name, furColor) {
    //     this.name = name;
    //     this.furColor = furColor;
    // }
    // hi () {
    //     return `Hi, my name is ${this.name}`
    super(name, furColor); // super construktorius 
    this.sound = 'krimst';
    this.emoji = '🐹';
    }
    // voice () {
    //     const sound = (' ' + this.sound).repeat(2);
    //     const emojies = this.emoji.repeat(2);
    //     return `${this.name}: ${sound} ${emojies}!`
    // }
}