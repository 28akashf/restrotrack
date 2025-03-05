import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newmenuitem',
  standalone: false,
  templateUrl: './newmenuitem.component.html',
  styleUrl: './newmenuitem.component.scss'
})
export class NewmenuitemComponent implements OnInit {
  
  menuForm !: FormGroup;
  categoryList:string[] = ['Snacks','Drinks','Deserts','Main Course','Starters'];
  cuisineList:string[] = ['Italian','Lebanese','American','Chinese','Indian','Irish','English'];

  constructor(private fb:FormBuilder) {


  }
  ngOnInit(): void {
    this.menuForm =  this.fb.group(
      {
         itemid: new FormControl(),
         itemname:[''],
         desc:[''],
         price:[''],
         cuisine:[''],
         category:[''],
      }
    );
  }

}
