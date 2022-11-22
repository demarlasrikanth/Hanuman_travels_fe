import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginPage/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'login', 
    pathMatch: 'full' 
  },
  {
  path:'login',
  component:LoginComponent
  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: '',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
