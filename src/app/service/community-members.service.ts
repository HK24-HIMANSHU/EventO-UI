import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Community } from '../model/community';

@Injectable({
  providedIn: 'root',
})
export class CommunityMembersService {
  member: CommunityMembersService = {} as CommunityMembersService;

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:5171/Community';

  public createMember(cmId: number, uId: number) {
    return this.httpClient.post(this.url + `/${cmId}/add/${uId}`, cmId);
  }
  public getUserJoinedCommunities(uId: number): Observable<[]> {
    return this.httpClient.get<[]>(
      `http://localhost:5171/User/${uId}/communities/joined`
    );
  }
  public getMemberById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  public getMemberByCommunityId(id: number) {
    return this.httpClient.get(this.url + 'community/' + id);
  }

  public getMemberByUserId(id: number) {
    return this.httpClient.get(this.url + 'user/' + id);
  }

  // public getMemberByRole(role: string) {
  //   return this.httpClient.get(this.url + 'role/' + role);
  // }

  // public updateMember(member: CommunityMembersService) {
  //   return this.httpClient.put(this.url + 'update', member);
  // }

  public deleteMember(id: number) {
    return this.httpClient.delete(this.url + 'delete/' + id);
  }
}
