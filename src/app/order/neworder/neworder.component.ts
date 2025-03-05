import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-neworder',
  standalone: false,
  templateUrl: './neworder.component.html',
  styleUrl: './neworder.component.scss'
})
export class NeworderComponent implements OnInit {
      neworderForm!:FormGroup;
      drinknsnackList:string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
      starterList:string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
      maincourseList:string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
      desertList:string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
      constructor(private fb:FormBuilder,private _location: Location) {
             
      }
  ngOnInit(): void {
    this.neworderForm = this.fb.group({
      orderId:[''],
      tableNo:[''],
      drinknsnack:[''],
      starter:[''],
      maincourse:[''],
      desert:['']
    });
  }

  goback(){
    this._location.back();
  }
}

export class OrderDto{

     orderId!:string;
     tableNo!:string;
     items!:string[];
     
}
