import { Component } from '@angular/core';

@Component({
  selector: 'app-billing',
  standalone: false,
  templateUrl: './billing.component.html',
  styleUrl: './billing.component.scss'
})
export class BillingComponent {
   ELEMENT_DATA: PeriodicElement[] = [
    {sr: 1, orderid: 'AOL1234', date: '20-02-2025', amount: 10.00, status: 'paid'},
    {sr: 2, orderid: 'AOL1235', date: '20-02-2025', amount: 20.00, status: 'paid'}, 
    {sr: 3, orderid: 'AOL1236', date: '20-02-2025', amount: 30.00, status: 'paid'},

  ];
  displayedColumns: string[] = ['sr', 'orderid', 'date', 'amount','status'];
  dataSource = this.ELEMENT_DATA;
}

export interface PeriodicElement {
  date: string;
  sr: number;
  orderid: string;
  amount: number;
  status: string;
}
