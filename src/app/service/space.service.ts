import { Injectable } from '@angular/core';
import { Space } from '../model/space';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SpaceService {
  space: Space = {} as Space;

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/space';

  public createSpace(space: Space) {
    return this.httpClient.post(this.url + '/create', space);
  }

  public updateSpace(space: Space) {
    return this.httpClient.put(this.url + '/update', space);
  }

  public getSpaceById(id: number) {
    return this.httpClient.get(this.url + id);
  }
  public getSpaceByOwnerId(id: number) {
    // return this.httpClient.get(this.url + '/owner/' + id);
  }
  public getSpaceByCommunityId(id: number) {
    // return this.httpClient.get(this.url + '/community/' + id);
  }
  public getSpaceByEventId(id: number) {
    // return this.httpClient.get(this.url + '/event/' + id);
  }
}
