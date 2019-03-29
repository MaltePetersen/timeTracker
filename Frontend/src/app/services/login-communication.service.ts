import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCommunicationService {


  private isLoggedIn = new Subject<boolean>();

  sendMessage() {
    this.isLoggedIn.next();
  }

  getMessage(): Observable<boolean> {
    return this.isLoggedIn.asObservable();
  }


}
