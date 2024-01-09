//HERENCIA Y COMPOSICION

//herencia

// export class Person {
//    //public name: string;
//     //public address: string;
//     //private address: string;

//     //onstructor(){
//     //this.name= 'Fernando';
//     //this.address = 'New York';
//     // }
//     constructor(
//         public name:string, 
//         private address: string ='No address')//private address:string= 'no address'
//         {}
//             // this.name= 'Fernando';
//         // this.address = 'Costa rica';
//          //this.name= name;
//          //this.address = address;
// }
// //HACER CLASE QUE SE CREA DESDE PERSONA
// export class Hero extends Person {
    
//     constructor(
//     public alterEgo: string,
//     public age:number,
//     public realName: string,
//     ){
//         //el super es de la clase que sacamos propiedades.llama a persona
//     super(realName, 'New York');
//     }  
// }
// //const ironman = new Person();
// //const ironman = new Person('Iroman', 'new york');
// //const ironman = new Hero('Iroman',45, 'Tony'); parte del contructor de hero
// const ironman = new Hero('Iroman',45, 'Tony');

// console.log(ironman);

//COMPOSICION

export class Person {
     constructor(
         public firstName:string, 
         public secondName: string,
         private address: string ='No address')//private address:string= 'no address'
         {}
             
 }
 
 //HACER CLASE QUE SE CREA DESDE PERSONA
 
 export class Hero {

    //public person:Person; 
     
     constructor(
     public alterEgo: string,
     public age:number,
     public realName: string,
     public person: Person
     ){
         // es de la clase que sacamos propiedades.llama a persona
     //this.person = new Person (realName);
     }
     
 }
 const tony = new Person('Tony','Stark','new York');
 const ironman = new Hero('Iroman',45, 'Tony', tony);
 
 
 console.log(ironman);