import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { HttpClient,HttpHeaders,HttpResponse } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    
    Object.entries(userData).map(([key, value]) => [key, value ])
    let phoneNumber=userData.phone.number;
    let countryCode= userData.phone.countryCode;
    userData.phone=phoneNumber;
    userData.countryCode=countryCode;

    return this.http.post('https://dev-api.service-genie.xyz/customer/registerUser', userData)
  }

  emailValidation(email:string){
    return this.http.post('https://api.service-genie.xyz/customer/emailValidation',{email})
  }

  verifyPhoneNumber(userId:string){
    return this.http.post('https://dev-api.service-genie.xyz/customer/verifyPhoneNumber',userId).pipe(map(
      (userId:string)=>console.log(userId))
    )
  }

  PhoneNumberValidation(userData:string){
    Object.entries(userData).map(([key, value]) => [key, value ])
    let phone=userData['number'];
    let countryCode=userData['countryCode'];
    return this.http.post('https://dev-api.service-genie.xyz/customer/phoneNumberValidation',{phone,countryCode})
  }
 
}
