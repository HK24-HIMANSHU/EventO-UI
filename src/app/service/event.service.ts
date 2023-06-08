import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';
import { EventDto } from '../model/event-dto';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  event: Event = {} as Event;

  constructor(private httpClient: HttpClient) {}

  url = 'http://localhost:5171/event';

  public getAllEvents(): Observable<EventDto[]> {
    return this.httpClient.get<EventDto[]>(this.url + '/all');
  }

  public createEvent(event: Event): Observable<any> {
    return this.httpClient.post<any>(this.url + '/create', event);
  }

  public updateEvent(event: Event) {
    return this.httpClient.put(this.url + '/update', event);
  }

  public getEventById(id: number) {
    return this.httpClient.get(this.url + id);
  }

  public getEventByCommunityId(id: number) {
    // return this.httpClient.get(this.url + '/community/' + id);
  }

  public getEventByOwnerId(id: number) {
    // return this.httpClient.get(this.url + '/owner/' + id);
  }

  public getEventBySpaceId(id: number) {
    // return this.httpClient.get(this.url + '/space/' + id);
  }

  public getEventByUserId(id: number) {
    // return this.httpClient.get(this.url + '/user/' + id);
  }

  public getEventByDate(date: Date) {
    // return this.httpClient.get(this.url + '/date/' + date);
  }

  public getEventByTime(time: Date) {
    // return this.httpClient.get(this.url + '/time/' + time);
  }

  public getEventByDuration(duration: number) {
    // return this.httpClient.get(this.url + '/duration/' + duration);
  }

  public getEventByPrice(price: number) {
    // return this.httpClient.get(this.url + '/price/' + price);
  }

  public getEventByTitle(title: string) {
    return this.httpClient.get(this.url + '/title/' + title);
  }
}
