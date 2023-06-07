import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Community } from 'src/app/model/community';
import { Event } from 'src/app/model/event';
import { CommunityService } from 'src/app/service/community.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css'],
})
export class AllEventsComponent {
  events: Event[] = [];
  constructor(private eventService: EventService, private router: Router) {}
  ngOnInit(): void {
    let obEvents = this.eventService.getAllEvents();
    obEvents.subscribe((data: Event[]) => {
      this.events = data;
    });
  }
  onClickEventPost(Id: number) {
    this.router.navigate(['/${id}']);
  }
}
