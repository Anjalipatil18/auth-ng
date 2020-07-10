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
    console.log(userData)


    return this.http.post('https://dev-api.service-genie.xyz/customer/registerUser', userData);
  }
}