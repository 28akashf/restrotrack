import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newinventoryitem',
  standalone: false,
  templateUrl: './newinventoryitem.component.html',
  styleUrl: './newinventoryitem.component.scss'
})
export class NewinventoryitemComponent implements OnInit {
inventoryForm !: FormGroup;
categoryList:string[] = ['Meat','Vegetables','Fruits','Groceries'];
constructor(private fb:FormBuilder) {
 

}
  ngOnInit(): void {
    
    this.inventoryForm = this.fb.group({
      invid: new FormControl(),
      itemname:[''],
      desc:[''],
      qty:[''],
      unit:[''],
      category:['']

    });
  }
}
