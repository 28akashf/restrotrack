import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    StaffComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class StaffModule { }
