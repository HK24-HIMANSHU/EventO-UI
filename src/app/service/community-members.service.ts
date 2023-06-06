import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommunityMembersService {
  member: CommunityMembersService = {} as CommunityMembersService;

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/community-members/';

  public createMember(member: CommunityMembersService) {
    return this.httpClient.post(this.url + 'create', member);
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
