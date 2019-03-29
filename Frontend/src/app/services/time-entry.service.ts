import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {UserStorageService} from './user-storage.service';
import {TimeEntry} from '../domain/TimeEntry';
import {TimeEntrybyUserDTO} from '../components/time-list/time-list.component';

@Injectable({
  providedIn: 'root'
})

export class TimeEntryService {

  constructor(private httpClient: HttpClient, private  tokenStorage: TokenStorageService, private userStorage: UserStorageService) {
  }

  createTimeEntry(model) {
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.httpClient.post(
      'http://localhost:8080/api/timeentries',
      model, {
        headers, observe: 'response'

      });
  }

  getAllTimeEntries() {
    // TODO getHeader in TokenStorage einfügen, statt jedes mal den Header neu zu bilden.
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.httpClient.get<TimeEntrybyUserDTO[]>('http://localhost:8080/api/timeentries/user/' +
      this.userStorage.getCurrentUserId(), {headers: headers});
  }

  deleteTimeEntry(id: number) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.httpClient.delete('http://localhost:8080/api/timeentries/' + id, {headers: headers});
  }

  changeTimeEntry(id: number, model) {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.httpClient.put('http://localhost:8080/api/timeentries/' + id, model, {headers, observe: 'response'});
  }
}
