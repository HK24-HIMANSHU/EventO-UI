import { Component } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Event } from 'src/app/model/event';
import { CommunityService } from 'src/app/service/community.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css']
})
export class AllEventsComponent {
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
