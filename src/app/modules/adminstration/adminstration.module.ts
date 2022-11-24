import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstrationRoutingModule } from './adminstration-routing.module';

import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManagePaymentsComponent } from './manage-payments/manage-payments.component';
import { AdministrationComponent } from './administration.component';


@NgModule({
  declarations: [
    AdministrationComponent,
    ManageUsersComponent,
    ManageBookingsComponent,
    ManagePaymentsComponent
  ],
  imports: [
    CommonModule,
    AdminstrationRoutingModule
  ]
})
export class AdminstrationModule { }
