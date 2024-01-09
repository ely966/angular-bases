export interface Product {
    destription: string;
    price: number;

}

const phone: Product={
    destription: 'Nokia A1',
    price: 150.0
}

const tablet: Product={
    destription: 'iPad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}


//en vez de tax y productos por si cambia 
//function taxCalculation(options: TaxCalculationOptions): number[] {
//function taxCalculation(options: TaxCalculationOptions): [number,number] {//destructuracion basica
//function taxCalculation({tax, products}: TaxCalculationOptions): [number,number] {
export function taxCalculation(options: TaxCalculationOptions): [number,number] {
    
    const {tax, products} = options;
    let total = 0;

    //Ir sumandole el precio de lso productos a total
    
    //options.products.forEach( product => {
       //total=total+product.price;
        //total += product.price; //sumarle valor del precio del producto
    //});
    //destructuracion
    //CONTROL+ BARRA ESPACIADORA

   products.forEach( ({price}) => {
       //total=total+price;
        total += price; //sumarle valor del precio del producto
    });

    return [total, total * tax];

}






const shoppingCart = [phone, tablet]; //carrito
const tax =0.15; //interes


//const result = taxCalculation({
 //   products: shoppingCart,
 //   tax: tax
//});

//console.log('Total', result.total);NO
//console.log('Total', result[0]);
//console.log('Tax', result[1]);

//destructuracion

const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax
});
console.log('Total', total);
console.log('Tax', taxTotal);





//podemos exportar con export(Product);//
//export{};