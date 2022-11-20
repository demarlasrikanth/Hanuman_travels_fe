import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './loginPage/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: 'login',
    component: LoginComponent

  },
  {
    path: 'signup',
    component:SignupComponent
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
