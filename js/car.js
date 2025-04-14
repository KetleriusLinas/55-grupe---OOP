// exportuojam i kita faila funkcijas, constantas ir viska ka tik reikia paciam.
// export function sum () { 

// }
// export const x = 7;

/* intro() -- apibudina masinos modeli ir spalva

// bako talpa,  ijungti varikli ( ar variklis ijungtas)
    drive (km) -- nurodzius norima nuvaziuoti atstuma, yra paskaiciuojamos degalu sanaudos, jei nepakanka degalu (nera degalu, negali vaziuot)
    
    , tai ribiniu atveju tiesiog sustoja ir masina issiujungia.
    engineOn() -- ijungia varikli, jei yra kuro ir jei yra isjungtas.
    engineOff() -- isjungia varikli, jei yra ijungtas.
    refill () -- uzpilti degalu, bet ne daugiau, nei telpa, (jei bakas tuscias.) ir jei variklis yra isjungtas.

*/

export class Car {
    constructor(model, color, tankMax) {
        this.model = model;
        this.color = color;
        this.tankMax = tankMax;
        this.tank = 0;
        this.engineIsOn = false;
    }

    intro() {
        return `This is ${this.color} ${this.model}`
    }

    refill (volume) {
        if (this.engineIsOn) {
            return `Error: to refill a tank, you must turn off engine first.`;
        }
        
        if (typeof volume !== 'number' || !isFinite(volume)) { // apsauga
            return `Error only numbers allowed.`
        }
        if (volume < 0 ) { // apsauga nuo minusiniu skaiciu.
            return `Refill with ${volume} litres is not allowed`;
        }

        // const availableVolume = this.tankMax - this.tank;
        //       availableVolume
        if (this.tankMax - this.tank >= volume) {
            this.tank += volume;
        } 
        else {
            // this.tank += availableVolume;
            this.tank = this.tankMax;
        }
    }
}

