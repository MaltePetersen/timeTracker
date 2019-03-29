import { Injectable } from '@angular/core';
const TOKEN_KEY = 'AuthToken';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }

  public getToken(): string {
    return  localStorage.getItem(TOKEN_KEY);
  }
  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    window.localStorage.removeItem('AUTH');
    window.localStorage.setItem('AUTH','TRUE');
  }
  public getAuth(): string{
    return window.localStorage.getItem('AUTH');

  }

  deleteToken(){
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem('AUTH');
  }

}
