import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  public register(userData: any): Observable<any> {
    console.log(userData)
    return this.http.post('https://dev-api.service-genie.xyz/documentation#!/%2Fcustomer/postCustomerRegisteruser', userData);
  }
}