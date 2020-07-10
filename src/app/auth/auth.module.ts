import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{Routes,RouterModule}  from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgxIntlTelInputModule  } from "ngx-intl-tel-input";


import{AuthComponent} from './auth.component';
import{RegisterComponent} from './register/register.component';
import {AuthService} from './shared/auth.service';

const routes:Routes=[
    {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations: [
    AuthComponent,
    RegisterComponent
    
  ],
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }