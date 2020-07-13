import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxIntlTelInputModule  } from "ngx-intl-tel-input";
import { NgOtpInputModule } from 'ng-otp-input';
import { CountdownModule } from 'ngx-countdown';


import{AuthComponent} from './auth.component';
import{RegisterComponent} from './register/register.component';
import {AuthService} from './shared/auth.service';
import { VerifyPhoneNumberComponent,FormatTimePipe } from './verify-phone-number/verify-phone-number.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
    {path:'register',component:RegisterComponent},
    {path:'verify',component:VerifyPhoneNumberComponent},
    {path:'home',component: HomeComponent}
]

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent,
    VerifyPhoneNumberComponent,
    HomeComponent,
    FormatTimePipe
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
    NgOtpInputModule,
    CountdownModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }