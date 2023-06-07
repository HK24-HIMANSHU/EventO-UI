import { Injectable } from '@angular/core';
import { Owner } from '../model/owner';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OwnerAuthService {
  owner: Owner = {} as Owner;
  

  url = 'http://localhost:5171/Auth/owner';

  constructor(private httpClient: HttpClient) {}

  public login(user: any): Observable<any> {
    return this.httpClient.post<any>(this.url + '/login', user);
  }

  public signup(owner: Owner): Observable<any> {
    return this.httpClient.post<any>(this.url + '/register', owner);
  }

  public getOwnerById(id: number) {
    return this.httpClient.get(this.url + id);
  }
}
