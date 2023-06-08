import { Injectable } from '@angular/core';
import { Community } from './../model/community';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CommunityService {
  community: Community = {} as Community;
  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:5171/Community';

  public getAllCommunities(): Observable<Community[]> {
    return this.httpClient.get<Community[]>(this.url + '/all');
  }

  public createCommunity(community: Community) {
    return this.httpClient.post(this.url + '/create', community);
  }

  public updateCommunity(community: Community) {
    return this.httpClient.put(this.url + '/update', community);
  }

  public getCommunityById(id: number): Observable<Community> {
    return this.httpClient.get<Community>(this.url + `/${id}`);
  }

  public getCommunityByOwnerId(id: number) {
    return this.httpClient.get(this.url + '/owner/' + id);
  }

  public getCommunityBySpaceId(id: number) {
    return this.httpClient.get(this.url + '/space/' + id);
  }

  public getCommunityByEventId(id: number) {
    return this.httpClient.get(this.url + '/event/' + id);
  }

  public getCommunityByUserId(id: number) {
    return this.httpClient.get(this.url + '/user/' + id);
  }

  public getCommunityByDate(date: Date) {
    return this.httpClient.get(this.url + '/date/' + date);
  }

  // public getCommunityByPrice(price: number) {

  //   return this.httpClient.get(this.url + '/price/' + price);
  // }

  public getCommunityByCategory(category: string) {
    return this.httpClient.get(this.url + '/category/' + category);
  }
}
