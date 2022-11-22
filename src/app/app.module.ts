import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModulesModule } from "./modules/modules.module";
import { LoginComponent } from './loginPage/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        SignupComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModulesModule,
        FormsModule,
        CommonModule
    ]
})
export class AppModule { }
