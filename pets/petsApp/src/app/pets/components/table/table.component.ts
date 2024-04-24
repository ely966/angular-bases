import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  inject,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnChanges, AfterViewInit {
  @Input() petReceiver: any[] = [];
  /*Headers/cabeceras table. Send from father*/
  @Input() categoryColumn: string[] = [''];
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;
  imgCat: String = '';
  //https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
  dataSourceTable!: MatTableDataSource<any>;

  private router = inject(Router);

  /*METODOS*/

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSourceTable = new MatTableDataSource(this.petReceiver);
  }

  ngAfterViewInit() {
    // this.dataSourceTable= new MatTableDataSource(this.dataSource);
    this.dataSourceTable.paginator = this.paginator;
  }

  //Filtro
  applyFilter(filterValue: KeyboardEvent | any) {
    this.dataSourceTable.filter = filterValue?.target.value
      .trim()
      .toLowerCase();
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*Clikear una fila de la tabla te redirige a los detalles*/
  detailsPet(cat: any) {
    // console.log(cat);
    // this.router.navigate([':' + cat]);
    this.router.navigate(['cat/', cat]);
  }
}
