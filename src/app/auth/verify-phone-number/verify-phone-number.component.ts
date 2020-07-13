import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AuthService} from '../shared/auth.service'
import {Router} from '@angular/router';
import { timer, Subscription } from "rxjs";
import { Pipe, PipeTransform } from "@angular/core";

@Component({
  selector: 'auth-verify-phone-number',
  templateUrl: './verify-phone-number.component.html',
  styleUrls: ['./verify-phone-number.component.scss']
})
export class VerifyPhoneNumberComponent implements OnInit {
  form:FormGroup;
  countDown: Subscription;
  counter = 650;
  tick = 1000;

  constructor(private auth:AuthService,
              private router:Router,
              private fb:FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.countDown = timer(0, this.tick).subscribe(() => --this.counter);

  }
  ngOnDestroy(){
    this.countDown=null;
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

@Pipe({
  name: "formatTime"
})

export class FormatTimePipe implements PipeTransform {
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ("00" + minutes).slice(-2) +
      ":" +
      ("00" + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
}

