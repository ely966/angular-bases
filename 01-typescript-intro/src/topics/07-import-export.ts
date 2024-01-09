
//Modulo. export exporta fuera

//Hay que interferir product del fichero 6
//Export en el 6 en el interface. ctrl + espaco sugerencia
import { Product, taxCalculation } from './06-function-destructuring';

const shoppingCard: Product[] = [
    {
        destription: 'Nokia',
        price: 100
    },
    {
        destription: 'iPad',
        price: 150
    }


];



//Necesitamos la funcion del 6
//Tax =0.15
//ponrt export en el 6 de taxcalculation.quita la ultima letra de taxCalculationy saldra opcione para importarlo
//control y raton encima y da información

//A no ser que sea muy necesario, no deberia commentar en el otro
const [total, tax] = taxCalculation({
    products: shoppingCard,
    tax: 0.15
})



console.log('total', total);
console.log('tax:', tax);