import { Component } from '@angular/core';
import { Event } from 'src/app/model/event';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-all-communities',
  templateUrl: './all-communities.component.html',
  styleUrls: ['./all-communities.component.css']
})
export class AllCommunitiesComponent {
  events: Event[] = [];
  constructor(
    private eventService: EventService,
  ) { }
  ngOnInit(): void {
    let obEvents = this.eventService.getAllEvents();
    // obEvents.subscribe((data: Event[]) => {
    //   this.events = data;
    // });

  }
}
