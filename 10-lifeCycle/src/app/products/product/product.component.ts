import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent
  implements
    OnChanges,
    OnInit,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked
{
  public isProductVisible: boolean = false;
  public previousPrice: number = 10;
  public currentPrice: number = 10;

  contructor() {}

  //Metodo doCheck -> afterContentcheck afterView
  ///check cambios, despues de chekear, vuelve a ver si hay chekear
  //Oncheck antes de un cambio en una propiedad
  //after se ppuede usar por ejemplo par amodificar el tamañó de un div, tras realizar la modificacion peude hacer qu emuetsre el valor
  //pipe ya realiza lo de ondestroy, cuando termina el usar ese componente lo "destruye"
  //peticiones http se cancelan solo tras dar resultado

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  //COntructor justo antes de un ciclo de vida

  //ngChhange para saber que cmabios hubo
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges');
  }

  //OnInit Justo despues del contructor

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  //OnDestroy limpiar o apra destruir un componente
  ngOnDestroy(): void {
    //limpiar o destrozar el componente, que da problemas de memoria si no se usa
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice += 1;
    //++
  }
}
