import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
 
     username:string;
     password:string;

     constructor() {
      this.username="";
      this.password="";
     }

     Login(){
       if(this.username=='aka' && this.password=='fel')
       {
        console.log("Login Works !");
       }
       else
       {
        console.log("Login failed !");
       }
       

     }
}

