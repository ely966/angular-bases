//decorator
function classDecorator(
    constructor:any
){

   return class extends constructor{
    newProperty = 'New property';
    hello ='override';
   }

}

//se usa decorator asi @classsDecorator. activar decoratr en config
//@classDecorator

export class SuperClass {
    public myProperty: string= 'Abc123';

    print() {
        console.log('Hola mundo');
    }

}

console.log(SuperClass);
const myClass = new SuperClass();
console.log(myClass);