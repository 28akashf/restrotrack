import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { MatTableModule } from '@angular/material/table';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class OrderModule { }
