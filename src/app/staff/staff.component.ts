import { Component } from '@angular/core';

@Component({
  selector: 'app-staff',
  standalone: false,
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss'
})
export class StaffComponent {
  ELEMENT_DATA: PeriodicElement[] = [
    {sr: 1, empid: 'AOL1234', doj: '20-02-2025', fname:'james', lname:'ten', role:'chef', status:'active'},
    {sr: 2, empid: 'AOL1235', doj: '20-02-2025', fname:'james', lname:'ten', role:'chef', status:'active'}, 
    {sr: 3, empid: 'AOL1236', doj: '20-02-2025', fname:'james', lname:'ten', role:'chef', status:'active'}

  ];
  displayedColumns: string[] = ['sr', 'empid', 'fname', 'lname', 'doj', 'role', 'status'];
  dataSource = this.ELEMENT_DATA;
}

export interface PeriodicElement {
  sr: number;
  empid: string;
  fname: string;
  lname: string;
  doj: string;
  role: string;
  status: string;
}
