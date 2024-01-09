const skills: string[]= ['Bash','Counter', 'healing'];
//string[] todo debe ser string
//const si no se va a cambiar


//interface apra definir cada parte del objeto.
interface character {
    name: string;
    hp:number;
    skills: string[];
    hometown?: string;  //opcional
}

const strider: character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'counter']
}

//añadir luego una parte
strider.hometown = 'Rivendell';

//console.log(strider)
console.table(strider)
export {}; //asi lo conviertes en modulo