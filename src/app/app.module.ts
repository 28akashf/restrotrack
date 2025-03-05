import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginModule } from './login/login.module';
import { NavlayoutComponent } from './navlayout/navlayout.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MenuModule } from './menu/menu.module';
import { MenuComponent } from './menu/menu.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { InventoryModule } from './inventory/inventory.module';
import { BillingComponent } from './billing/billing.component';
import { BillingModule } from './billing/billing.module';
import { OrderModule } from './order/order.module';
import { StaffModule } from './staff/staff.module';

@NgModule({
  declarations: [
    AppComponent,
    NavlayoutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MenuModule,
    InventoryModule,
    BillingModule,
    OrderModule,
    StaffModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule
    
],
  providers: [
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
