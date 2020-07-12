import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthService {

  private result;

  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    
    Object.entries(userData).map(([key, value]) => [key, value ])
    let phoneNumber=userData.phone.number;
    let countryCode= userData.phone.countryCode;
    userData.phone=phoneNumber;
    userData.countryCode=countryCode;

    return this.http.post('https://dev-api.service-genie.xyz/customer/registerUser', userData).pipe(map(
      (response:any)=> {
       this.result = response
      }
    ))
  }

  emailValidation(email:string){
    return this.http.post('https://api.service-genie.xyz/customer/emailValidation',{email})
  }

  public verifyPhoneNumber(userData:any): Observable<any>{
    let userId = this.result.data.sid;
    let expireOtp = this.result.data.expireOtp;
    userData.userId=userId;
  
    return this.http.post('https://dev-api.service-genie.xyz/customer/verifyPhoneNumber',userData)
  }

  PhoneNumberValidation(userData:string){
    Object.entries(userData).map(([key, value]) => [key, value ])
    let phone=userData['number'];
    let countryCode=userData['countryCode'];
    return this.http.post('https://dev-api.service-genie.xyz/customer/phoneNumberValidation',{phone,countryCode})
  }
 
}
