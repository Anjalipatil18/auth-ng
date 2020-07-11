import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule}  from '@angular/router';

import { AppComponent } from './app.component';
import{HeaderComponent} from './common/header/header.component';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';
import{AuthModule} from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VerifyComponent } from './verify/verify.component';

const routes:Routes=[
  {path:'',redirectTo:'/register',pathMatch:'full'},
  {path:'verify',component:VerifyComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VerifyComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }