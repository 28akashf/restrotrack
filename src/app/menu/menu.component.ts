import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
   
     menuData  =  [
      {
        "srno":1,
        "image":"",
        "name":"Pizza",
        "category":"Main",
        "cuisine":"Italian",
        "price":500,
        "desc":"spicy"
      },
      {
       "srno":2,
       "image":"",
       "name":"Pizza",
       "category":"Main",
       "cuisine":"Italian",
       "price":500,
       "desc":"spicy"
     },{
       "srno":3,
       "image":"",
       "name":"Pizza",
       "category":"Main",
       "cuisine":"Italian",
       "price":500,
       "desc":"spicy"
     },{
       "srno":4,
       "image":"",
       "name":"Pizza",
       "category":"Main",
       "cuisine":"Italian",
       "price":500,
       "desc":"spicy"
     },{
       "srno":5,
       "image":"",
       "name":"Pizza",
       "category":"Main",
       "cuisine":"Italian",
       "price":500,
       "desc":"spicy"
     }
 
  ];
    
}

export class MenuDto{

 data = [
     {
       "srno":1,
       "image":"",
       "name":"Pizza",
       "category":"Main",
       "cuisine":"Italian",
       "price":500,
       "desc":"spicy"
     },
     {
      "srno":2,
      "image":"",
      "name":"Pizza",
      "category":"Main",
      "cuisine":"Italian",
      "price":500,
      "desc":"spicy"
    },{
      "srno":3,
      "image":"",
      "name":"Pizza",
      "category":"Main",
      "cuisine":"Italian",
      "price":500,
      "desc":"spicy"
    },{
      "srno":4,
      "image":"",
      "name":"Pizza",
      "category":"Main",
      "cuisine":"Italian",
      "price":500,
      "desc":"spicy"
    },{
      "srno":5,
      "image":"",
      "name":"Pizza",
      "category":"Main",
      "cuisine":"Italian",
      "price":500,
      "desc":"spicy"
    }

 ]
     
  
   
}


