import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  invoiceNo: number;
  shopName: string;
  issuedDate: string;
  expiredate: string;
  status: string;
  value: number;
  peyment: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B',invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' ,invoiceNo: 1,shopName:'malinda',issuedDate:'2020,01,20',expiredate:'2020,02,28',status:'paid',value:10000,peyment:'check'},
];

@Component({
  selector: 'app-table-filtering-example',
  templateUrl: './table-filtering-example.component.html',
  styleUrls: ['./table-filtering-example.component.css']
})
export class TableFilteringExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  displayedColumns: string[] = ['invoiceNo','shopName','issuedDate','expiredate','status','value','peyment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

  }

  
}
