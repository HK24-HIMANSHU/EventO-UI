import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventAttendeeService {
  attendee: EventAttendeeService = {} as EventAttendeeService;

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:3000/event-attendee/';

  public createAttendee(attendee: EventAttendeeService) {
    return this.httpClient.post(this.url + 'create', attendee);
  }

  public getAttendeeById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  public getAttendeeByEventId(id: number) {
    return this.httpClient.get(this.url + 'event/' + id);
  }

  public getAttendeeByUserId(id: number) {
    return this.httpClient.get(this.url + 'user/' + id);
  }

  public deleteAttendee(id: number) {
    return this.httpClient.delete(this.url + 'delete/' + id);
  }
}
