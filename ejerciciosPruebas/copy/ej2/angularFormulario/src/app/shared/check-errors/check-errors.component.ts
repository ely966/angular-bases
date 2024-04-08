import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-errors',
  templateUrl: './check-errors.component.html',
  styleUrl: './check-errors.component.css',
})
export class CheckErrorsComponent {
  //formulario

  //control que compribar error
  @Input() control: string = '';
}
