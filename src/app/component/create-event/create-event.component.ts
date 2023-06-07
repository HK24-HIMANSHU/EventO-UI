import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  user: any;
  event: Event = {
    Id: 0,
    Name: '',
    Date: new Date(),
    Duration: 0,
    Price: 0,
    Rules: '',
    SpaceId: 0,
    UserId: 0,
    CreatedAt: new Date(),
    Time: new Date(),
  } as Event;
  ngOnInit(): void {
    this.user = localStorage.getItem('userInfo');
    console.log(this.user);
    this.event.UserId = parseInt(this.user.Id);
  }
}
