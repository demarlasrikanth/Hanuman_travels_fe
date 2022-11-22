import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
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
        path:"contactUs",
        component:ContactUsComponent
      },

    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
