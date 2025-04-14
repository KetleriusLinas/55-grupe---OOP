import { Car } from './js/Car.js';

// volvo.engineOn();


const volvo = new Car ('Volvo S40', 'red', 55);
const zapas = new Car ('Zapas', 'white', 35);

volvo.intro();
console.log(volvo.intro());
zapas.intro();
console.log(zapas.intro());

zapas.refill(5);
zapas.refill(15);
zapas.refill(7);
console.log(zapas.refill(-2));

console.log(zapas.refill(null));
console.log(zapas.refill(Infinity));
console.log(zapas.refill(NaN));
console.log(zapas.refill('pazadais uzpilti'));


console.log(zapas);
