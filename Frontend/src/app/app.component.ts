import {Component } from '@angular/core';
import {LoginCommunicationService} from './services/login-communication.service';
import { Subscription} from 'rxjs';
import {TokenStorageService} from './services/token-storage.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
auth: string = window.localStorage.getItem('AUTH');
subscription: Subscription;

  constructor(private loginCom: LoginCommunicationService, private tokenStorageServ: TokenStorageService) {
  this.subscription = this.loginCom.getMessage().subscribe(auth => { this.auth = this.tokenStorageServ.getAuth();
    })
  }





}


