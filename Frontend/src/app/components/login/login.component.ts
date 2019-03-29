import {Component, OnInit} from '@angular/core';
import {LoginInfo} from '../../domain/LoginInfo';
import {TokenStorageService} from '../../services/token-storage.service';
import {Router} from '@angular/router';
import {LoginCommunicationService} from '../../services/login-communication.service';
import {UserStorageService} from '../../services/user-storage.service';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private loginService: LoginService,
              private tokenStorage: TokenStorageService,
              private router: Router,
              private loginCommunication: LoginCommunicationService,
              private userStorage: UserStorageService) {
  }

  user: string;
  password: string;
  login: LoginInfo;
  token: any;

  onSubmit() {
    this.login = new LoginInfo();
    this.login.username = this.user;
    this.login.password = this.password;
    this.loginService.login(this.login).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.body.jwt.accessToken);
        this.userStorage.setCurrentUser(data.body.user);
        console.log(this.userStorage.getCurrentUser());
        this.loginCommunication.sendMessage();
        this.router.navigate(['']);
      }
    );
  }


  ngOnInit() {

  }

}
