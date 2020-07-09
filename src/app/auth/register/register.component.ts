import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AuthService} from '../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;


  constructor(private fb: FormBuilder,
              private auth:AuthService,
              private router:Router) { }

  ngOnInit(){
    this.initForm();
  }


  initForm() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required,
                          Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      deviceId:'12345',
      devType:3,
      loginType: 1,
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required]
    })
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
      (formData)=>{
        console.log(formData)
        
      },
      (error)=>{
        console.log(error);
       } )
  }  

}
