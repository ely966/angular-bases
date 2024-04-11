import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  /*Headers/cabeceras table. Send from father*/
  @Input() categoryColumn: string[] = [''];

  @Input() titlePag: string = 'Title'; /*Titulo pantalla. sobre la tabla*/
  @Input() dataSource: any[] = []; /*datos que recibe apra mostrar en la table*/

  dataSourceTable!: MatTableDataSource<any>;

  @Input() resultsLength = this.dataSource.length;
  isLoadingResults = true;
  isRateLimitReached = false;
  /*! es decirle a angular que esto lo inicializar luego*/
  // translate: inject();
  @ViewChild('paginator', { static: false }) paginator!: MatPaginator;

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSourceTable = new MatTableDataSource(this.dataSource);
  }
  ngAfterViewInit() {
    // this.dataSourceTable= new MatTableDataSource(this.dataSource);
    this.dataSourceTable.paginator = this.paginator;
    console.log(this.dataSourceTable.paginator);
  }
  ngOnInit(): void {
    //this.dataSourceTable = new MatTableDataSource(this.dataSource);
  }

  //Filtro
  applyFilter(filterValue: KeyboardEvent | any) {
    this.dataSourceTable.filter = filterValue?.target.value
      .trim()
      .toLowerCase();
    //this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
