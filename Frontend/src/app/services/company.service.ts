import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {TokenStorageService} from './token-storage.service';
import {Company} from '../domain/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient, private  tokenStorage: TokenStorageService) {
  }

  getAllCompanies() {
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer ' + this.tokenStorage.getToken());
    return this.http.get<Company[]>('http://localhost:8080/api/companies/all', {headers: headers});
  }
}
