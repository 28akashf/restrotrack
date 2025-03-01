import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-inventory',
  standalone: false,
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InventoryComponent {
  inventoryData  =  [
    {
      "srno":1,
      "image":"",
      "name":"Flour",
      "quantity":500,
      "unit":"Kg"
    },
    {
      "srno":2,
      "image":"",
      "name":"Flour",
      "quantity":500,
      "unit":"Kg"
    },
    {
      "srno":3,
      "image":"",
      "name":"Flour",
      "quantity":500,
      "unit":"Kg"
    },
    {
      "srno":4,
      "image":"",
      "name":"Flour",
      "quantity":500,
      "unit":"Kg"
    },
    {
      "srno":5,
      "image":"",
      "name":"Flour",
      "quantity":500,
      "unit":"Kg"
    }

];
  
}
