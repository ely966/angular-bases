//any cualquier valor
function addNumber(a:number, b:number) {
    
    return a + b;
    //underfined no retorna nada
    //void igual
};


//funcion de flecha. definimo lo que dara al funcion
const addNumbersArrow = (a:number, b:number): string => {
    //return (a + b).toString;
    return `${a + b}`;
}

//(a + b).toString convertir string


function multiply (firsNumber:number, secondNumber?:number, base:number = 2) {
    return firsNumber * base;

}





//const result:number= addNumber(1, 2);
//const result2: string = addNumbersArrow(1,2);
//const result3multiplyResult:number = multiply(5);
//toStrings()

//console.log({result, result2, result3multiplyResult}); //como objeto


//funcion con objetos
interface Character {
    name:string;
    hp:number;
    showHp:() => void;
}






const healCharacter = (character: Character, amount: number) => {

    character.hp += amount;

}

const strider: Character ={
    name: 'strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);

    }

}

//curar
healCharacter(strider, 10);

strider.showHp(); //mostrar vida



const result:number= addNumber(1, 2); 

export{};