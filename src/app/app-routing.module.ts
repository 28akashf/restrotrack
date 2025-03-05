import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';
import { InventoryComponent } from './inventory/inventory.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { BillingComponent } from './billing/billing.component';
import { NeworderComponent } from './order/neworder/neworder.component';
import { NewstaffComponent } from './staff/newstaff/newstaff.component';
import { NewinventoryitemComponent } from './inventory/newinventoryitem/newinventoryitem.component';
import { NewmenuitemComponent } from './menu/newmenuitem/newmenuitem.component';

const routes: Routes = [
  { path:'login', component:LoginComponent},
  { path:'staff', component:StaffComponent},
  { path:'inventory', component:InventoryComponent},
  { path:'menu', component:MenuComponent},
  { path:'order', component:OrderComponent},
  { path:'billing', component:BillingComponent},
  { path:'neworder', component:NeworderComponent},
  { path:'newstaff', component:NewstaffComponent},
  { path:'addinvitem', component:NewinventoryitemComponent},
  { path:'addmenuitem', component:NewmenuitemComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
