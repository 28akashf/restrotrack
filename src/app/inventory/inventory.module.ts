import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NewinventoryitemComponent } from './newinventoryitem/newinventoryitem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    InventoryComponent,
    NewinventoryitemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class InventoryModule { }
