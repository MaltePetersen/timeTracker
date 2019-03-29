import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {ControllingView} from '../domain/ControllingView';
import {ControllingDto} from '../domain/ControllingDto';

@Injectable({
  providedIn: 'root'
})
export class ControllingService {

  constructor(private tokenStorage: TokenStorageService, private http: HttpClient) { }

  getControllingData() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.http.get<ControllingDto[]>('http://localhost:8080/api/controlling/all', {headers: headers});
  }

}
