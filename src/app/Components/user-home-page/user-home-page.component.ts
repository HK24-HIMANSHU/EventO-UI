import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommunityService } from 'src/app/service/community.service';
import { EventService } from 'src/app/service/event.service';
import { UserService } from 'src/app/service/user.service';
import { Event } from './../../model/event';
import { Community } from './../../model/community';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css'],
})
export class UserHomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private evService: EventService,
    private userService: UserService,
    private communityService: CommunityService
  ) {}
  userId: number = 0;
  user: any = {};
  events: any[] = [];
  attendedEvents: any[] = [];
  createdCommunities: any[] = [];
  communities: any[] = [];
  type: string = '1';

  getType(val: any) {
    this.type = val.toString();
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.userId = Number.parseInt(parameters.get('id')!);
      this.userService.getUserById(this.userId).subscribe((data) => {
        this.user = data;
        this.communities = data.communities;
        this.events = data.events;
        this.createdCommunities = data.createdCommunities;
        this.attendedEvents = data.attendedEvents;
      });
    });
  }
  getAttendees(eventId: number) {
    this.evService.getEventAttendees(eventId).subscribe((data) => {
      if (data) return data.length;
      return 0;
    });
  }
}
