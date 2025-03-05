import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardActions, MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { NewmenuitemComponent } from './newmenuitem/newmenuitem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
  
    NewmenuitemComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule
  ]
})
export class MenuModule { }
