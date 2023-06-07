import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  user: User = {} as User;

  constructor( private httpClint: HttpClient ) { }

  url: string = 'http://localhost:3000/user/';

  public login(user: User) {
    return this.httpClint.post(this.url + 'login', user);
  }

  public signup(user: User) {
    return this.httpClint.post(this.url + 'signup', user);
  }

  public getUserById(id: number) {
    return this.httpClint.get(this.url + id);
  }

  
}
