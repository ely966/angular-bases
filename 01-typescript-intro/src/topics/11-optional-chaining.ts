export interface Passenger {
    name: string;
    children?: string[];
}


const pasenger1: Passenger = {
    name: 'Fernando',
}
const pasenger2: Passenger = {
    name: 'Melissa',
    children: ['Natalia', 'Elizabeth'],
}


 const returnChildrenNumber = (passenger: Passenger)=> {
//     //const howManyChildren = passenger.children?.length || 0;//si existe, damme el resultado
//     //Si no hay valor, salga cero
     const howManyChildren = passenger.children?.length || 0;//si existe, damme el resultado
//     //Si no hay valor, salga cero

     console.log(passenger.name, howManyChildren);
 }


// const returnChildrenNumber = (passenger: Passenger):number => {
//     //const howManyChildren = passenger.children?.length || 0;//si existe, damme el resultado
//     //Si no hay valor, salga cero
//     if (!passenger.children) return 0;
//     const howManyChildren = passenger.children?.length;//si existe, damme el resultado
//     //Si no hay valor, salga cero

//     console.log(passenger.name, howManyChildren);
//     return howManyChildren;
// }

returnChildrenNumber(pasenger2);