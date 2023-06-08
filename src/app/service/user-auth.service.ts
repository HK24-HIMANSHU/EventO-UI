import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  user: User = {} as User;

  constructor(private httpClint: HttpClient) {}

  url: string = 'http://localhost:5171/Auth/user/';

  public login(user: any): Observable<any> {
    return this.httpClint.post<any>(this.url + 'login', user);
  }

  public signup(user: User): Observable<any> {
    return this.httpClint.post<any>(this.url + 'register', user);
  }

}
