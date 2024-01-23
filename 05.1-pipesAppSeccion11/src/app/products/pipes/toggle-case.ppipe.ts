import { Pipe, PipeTransform } from '@angular/core';

//lo que hace este pipe fernando |togleCase = 'FERNANDO'
//FERNANDO |ToggleCase: 'fernando'

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  //...argrs: any[] agruparresto de argumentos
  //transform(value: string, ...args: any[]): string {
  //por defecto es false, pero si es true se pondra mayuscula
  transform(value: string, toUpper: boolean = false): string {
    //console.log({ args });
    //return value.toUpperCase();
    console.log({ value, toUpper });
    //si esto esta en true -> value.toUpperCase() pasamos a mayusculas
    return toUpper
      ? value.toUpperCase()
      : //sino
        value.toLowerCase(); //este en minuscula
  }
}
