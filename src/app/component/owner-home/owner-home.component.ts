import { Component } from '@angular/core';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css']
})
export class OwnerHomeComponent {
  events: Event[] = [];
  constructor(
    private eventService: EventService,
  ) { }
  ngOnInit(): void {
    let obEvents = this.eventService.getAllEvents();
    obEvents.subscribe((data: Event[]) => {
      this.events = data;
    });

  }
}
