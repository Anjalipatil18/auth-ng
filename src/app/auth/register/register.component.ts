import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';
import{HttpErrorResponse} from '@angular/common/http'
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errors:any[]=[];

  separateDialCode = true;
	SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];
  
  constructor(private fb: FormBuilder,
              private auth:AuthService,
              private router:Router) { }

  ngOnInit(){
    this.initForm();
  }

  initForm():void {
    this.registerForm = this.fb.group({
    
      deviceId:'12345',
      devType:3,
      termsAndCond	:1,
      loginType: 1,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', [Validators.required],this.isPhoneUnique.bind(this)],
      email: ['', [Validators.required,
        Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')],this.isEmailUnique.bind(this)],
      password: ['', [Validators.required,Validators.minLength(7)]]
    })
  }

  isEmailUnique(control: FormControl) {
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.auth.emailValidation(control.value).subscribe(() => {
          resolve(null);
        }, () => { resolve({ 'isEmailUnique': true }); });
      }, 1000);
    });
    return q;
  }

  isPhoneUnique(control: FormControl){
    const q = new Promise((resolve, reject) => {
      setTimeout(() => {
        this.auth.PhoneNumberValidation(control.value).subscribe(() => {
          resolve(null);
        }, () => { resolve({ 'isPhoneUnique': true }); });
      }, 1000);
    });
    return q;
  }

  verifyPhoneNumber(){
    
  }


  isInvalidForm(fieldName): boolean {
    return this.registerForm.controls[fieldName].invalid &&
           (this.registerForm.controls[fieldName].dirty || this.registerForm.controls[fieldName].touched)
  }

  isRequired(fieldName): boolean {
    return this.registerForm.controls[fieldName].errors.required
  }

  register(){
    this.auth.register(this.registerForm.value).subscribe(
      (userData)=>{
        this.router.navigate(['/verify']);
      },
      (errorResponse:HttpErrorResponse)=>{
        this.errors = errorResponse.error.errors;
       } )
      
  }  

}
