//let name = 'Strider';
const name: string = 'Strider'; //No cambia
//nam2 = 123 no
//name='123' si

//let hpPoints: number | string =95;
let hpPoints: number | 'full' =95;
//hpPoints pueda tener dos valoes string y numero. numero o 'full'

hpPoints = 'full';
const isAlive: boolean = true;

console.log({name, hpPoints, isAlive});





export {};