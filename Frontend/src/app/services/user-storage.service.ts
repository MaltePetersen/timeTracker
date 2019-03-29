import {Injectable} from '@angular/core';
import {User} from '../domain/User';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  user: User;

  constructor() {
  }

  getCurrentUser(): User {
    this.user = JSON.parse(localStorage.getItem('user'));
    return this.user;
  }

  getCurrentUserId(): string {
    return this.getCurrentUser().id;
  }

  setCurrentUser(user: User) {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));

  }

}
