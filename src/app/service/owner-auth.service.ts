import { Injectable } from '@angular/core';
import { Owner } from '../model/owner';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OwnerAuthService {
  owner: Owner = {} as Owner;

  url = 'http://localhost:3000/owner/';

  constructor(private httpClient: HttpClient) {}

  public login(owner: Owner) {
    return this.httpClient.post(this.url + 'login', owner);
  }

  public signup(owner: Owner) {
    if (this.getOwnerById(owner.Id) != null) {
      return this.httpClient.post(this.url + 'signup', owner);
    }
  }

  public getOwnerById(id: number) {
    return this.httpClient.get(this.url + id);
  }
}
