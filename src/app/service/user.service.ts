import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:5171/user/';

  constructor(private httpClient: HttpClient) {}

  public getUserById(id: number): Observable<any> {
    return this.httpClient.get(this.url + id);
  }
}
