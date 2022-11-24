import { AdministrationComponent } from './administration.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageBookingsComponent } from './manage-bookings/manage-bookings.component';
import { ManagePaymentsComponent } from './manage-payments/manage-payments.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';

const routes: Routes = [
  {
    path:'',
    component:AdministrationComponent,
   children:[
  

  {
    path:'managebooking',
    component: ManageBookingsComponent
  },
  {
    path:'managepayments',
    component: ManagePaymentsComponent
  },
  {
    path:'manageusers',
    component: ManageUsersComponent
  }
]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstrationRoutingModule {

 }
