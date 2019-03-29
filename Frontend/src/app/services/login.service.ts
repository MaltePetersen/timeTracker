import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SignInObj} from '../domain/SignInObj';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient: HttpClient) { }

  login(model) {
    const headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.httpClient.post<SignInObj>(
      'http://localhost:8080/api/auth/signin',
      model, {
        headers, observe: 'response'
      });
  }
}
