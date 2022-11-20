import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModulesRoutingModule } from './modules-routing.module';
import { ModulesComponent } from './modules.component';
import { HomeComponent } from './home/home/home.component';
import { SidebarComponent } from './sidebar/sidebar/sidebar.component';
import { HeaderComponent } from './header/header/header.component';
import { BookingComponent } from './booking/booking.component';


@NgModule({
  declarations: [
    ModulesComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    BookingComponent
  ],
  imports: [
    CommonModule,
    ModulesRoutingModule
  ]
})
export class ModulesModule { }
