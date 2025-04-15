export class Dog {
    constructor (name, furColor) {
        this.name = name;
        this.furColor = furColor;
    }
    hi () {
        return `Hi, my name is ${this.name}.`
    }
    voice () {
        return `${this.name}: au au!🐕🐕`
    }
}