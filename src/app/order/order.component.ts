import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  standalone: false,
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
ELEMENT_DATA: PeriodicElement[] = [
    {sr: 1, orderid: 'AOL1234', date: '20-02-2025',  status: 'served',table: 2},
    {sr: 2, orderid: 'AOL1235', date: '20-02-2025',  status: 'pending', table: 5}, 
    {sr: 3, orderid: 'AOL1236', date: '20-02-2025', status: 'served', table: 9},

  ];
  displayedColumns: string[] = ['sr', 'orderid', 'date', 'status'];
  dataSource = this.ELEMENT_DATA;
}

export interface PeriodicElement {
  
  sr: number;
  orderid: string;
  date: string;
  table: number;
  status: string;
}