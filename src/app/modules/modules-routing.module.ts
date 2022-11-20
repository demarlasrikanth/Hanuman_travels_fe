import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ModulesComponent } from './modules.component';

const routes: Routes = [
  {
    path:'',
    component:ModulesComponent,
    children:[
      {
        path:"home",
        loadChildren:() => import('./home/home/home.module').then(m => m.HomeModule)
      },
      {
        path:"booking",
        loadChildren:() => import('./booking/booking.module').then(m => m.BookingModule)
      },

    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
