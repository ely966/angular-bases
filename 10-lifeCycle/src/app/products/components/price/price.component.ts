import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  @Input() price: number = 0;

  public interval$?: Subscription; //Estandar, para observabkle, para reconocerlo que e sun observable

  ngOnInit(): void {
    console.log('Componente hijo(price)  ngOnInit');
    //setInterval
    //suscribirse a observable spero tambien a intervalos de tiempo, no apra de saltar este mensaje
    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`Tick: ${value}`)
    );

    //que siempre da vlaores
    //windows.addEventListener( () => {})
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente hijo(price)  ngOnChanges');
    console.log({ changes }); //los cambios
  }
  ngOnDestroy(): void {
    console.log('Componente hijo(price)   ngOnDestroy');
    this.interval$?.unsubscribe();

    //window.removeEventListener(){}
  }
}
