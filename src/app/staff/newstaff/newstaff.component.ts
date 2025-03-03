import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-newstaff',
  standalone: false,
  templateUrl: './newstaff.component.html',
  styleUrl: './newstaff.component.scss'
})
export class NewstaffComponent implements OnInit {
  
   staffForm !: FormGroup;
   roleList:string[]=['chef','waiter','staff'];
   genderList:string[]=['male','female','others'];
  constructor(private fb:FormBuilder) {
     
  }
  
  ngOnInit(): void {
    
    this.staffForm = this.fb.group({
      empid:[''],
      fname:[''],
      lname:[''],
      email:[''],
      age:[''],
      gender:[''],
      role:['']
  });
  }

}
