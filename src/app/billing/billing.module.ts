import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    BillingComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class BillingModule { }
