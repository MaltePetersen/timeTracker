import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
import {LoginCommunicationService} from '../../services/login-communication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private tokenStorageSer: TokenStorageService,private router: Router, private loginCommunication: LoginCommunicationService) { }

  ngOnInit() {
  }

  logout(){
    this.tokenStorageSer.deleteToken();
    this.loginCommunication.sendMessage();
    this.router.navigate(["login"]);
  }
}
