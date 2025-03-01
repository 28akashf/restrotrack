import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    InventoryComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule 
  ]
})
export class InventoryModule { }
