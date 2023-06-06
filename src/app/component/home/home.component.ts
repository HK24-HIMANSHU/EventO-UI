import { Component, OnInit } from '@angular/core';
import { Event } from './../../model/event';
import { Community } from './../../model/community';
import { EventService } from 'src/app/service/event.service';
import { CommunityService } from 'src/app/service/community.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  events: Event[] = [];
  communities: Community[] = [];
  constructor(
    private eventService: EventService,
    private communityService: CommunityService
  ) {}
  ngOnInit(): void {
    let obEvents = this.eventService.getAllEvents();
    obEvents.subscribe((data: Event[]) => {
      this.events = data;
    });
    this.communityService
      .getAllCommunities()
      .subscribe((communities: Community[]) => {
        this.communities = communities;
      });
  }
  type: string = '1';

  getType(val: any) {
    this.type = val.toString();
  }
}
