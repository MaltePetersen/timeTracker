import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {TimeEntry} from '../domain/TimeEntry';
import {User} from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private  tokenStorage: TokenStorageService) {
  }

  getAllUsers() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.http.get<User[]>('http://localhost:8080/api/user/all' , {headers: headers});
  }
}
