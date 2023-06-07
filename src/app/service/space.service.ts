import { Injectable } from '@angular/core';
import { Space } from '../model/space';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  space: Space = {} as Space;

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:5171/Space';

  public getAllSpaces(): Observable<Space[]> {
    return this.httpClient.get<Space[]>(this.url + '/all');
  }

  public createSpace(space: Space) {
    return this.httpClient.post(this.url + '/create', space);
  }

  public updateSpace(space: Space) {
    return this.httpClient.put(this.url + '/update', space);
  }

  public getSpaceById(id: number): Observable<any> {
    return this.httpClient.get<any>(this.url + `/${id}`);
  }
  public getSpaceByOwnerId(id: number): Observable<Space[]> {
    return this.httpClient.get<Space[]>(this.url + '/owner/' + id);
  }
  public getSpaceByCommunityId(id: number) {
    // return this.httpClient.get(this.url + '/community/' + id);
  }
  public getSpaceByEventId(id: number) {
    // return this.httpClient.get(this.url + '/event/' + id);
  }
}
