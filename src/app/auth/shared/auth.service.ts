import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    
    Object.entries(userData).map(([key, value]) => [key, value ])
    let phoneNumber=userData.phone.number;
    let countryCode= userData.phone['countryCode'];
    userData.phone=phoneNumber;
    userData.countryCode=countryCode;
    return this.http.post('https://dev-api.service-genie.xyz/customer/registerUser', userData);
  }

  // private emailValidation(email:string):Observable<any>{
  //   console.log(email);
  //   return this.http.post('https://dev-api.service-genie.xyz/customer/emailValidation',email);
  // }

  // private verifyPhoneNumber(userId:string):Observable<any>{
  //   return this.http.post('https://dev-api.service-genie.xyz/customer/verifyPhoneNumber',userId)
  // }

  // private PhoneNumberValidation(phone:string,countryCode:string):Observable<any>{
  //   return this.http.post('https://dev-api.service-genie.xyz/customer/phoneNumberValidation',{phone,countryCode})
  // }
}