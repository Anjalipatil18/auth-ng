import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AuthService} from '../shared/auth.service'
import {Router} from '@angular/router';

@Component({
  selector: 'auth-verify-phone-number',
  templateUrl: './verify-phone-number.component.html',
  styleUrls: ['./verify-phone-number.component.scss']
})
export class VerifyPhoneNumberComponent implements OnInit {
  form:FormGroup;

  constructor(private auth:AuthService,
              private router:Router,
              private fb:FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }
  
  initForm(){
    this.form=this.fb.group({
      code:1111
    })
  }
  
  onSubmit() {
    this.auth.verifyPhoneNumber(this.form.value).subscribe(
      (userId)=>{
        this.router.navigate(['/home'])
      }
    )
    
  }
}
