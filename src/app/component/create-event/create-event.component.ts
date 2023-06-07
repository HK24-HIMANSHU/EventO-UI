import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event';
import { Space } from 'src/app/model/space';
import { User } from 'src/app/model/user';
import { EventService } from 'src/app/service/event.service';
import { SpaceService } from 'src/app/service/space.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  constructor(
    private spService: SpaceService,
    private evService: EventService
  ) {}
  spaces: Space[] = [];
  temp: any;
  user: User = {
    Id: 0,
    Email: '',
    Password: '',
    Username: '',
  } as User;
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
    this.temp = JSON.parse(localStorage.getItem('userInfo')!);
    this.user.Id = this.temp.id;
    this.user.Email = this.temp.email;
    this.user.Username = this.temp.username;
    //console.log('user', this.user);
    this.event.UserId = this.user.Id;
    this.spService.getAllSpaces().subscribe((data) => {
      this.spaces = data;
      console.log(this.spaces);
    });
  }

  onSelectSpace(spaceId: any) {
    this.event.SpaceId = parseInt(spaceId);
    console.log(spaceId);
    this.spService.getSpaceById(parseInt(spaceId)).subscribe((data) => {
      console.log(data);
      console.log(data.price);
      this.event.Price = data.price;
    });
  }

  onCreate() {
    if (this.event.SpaceId == 0) {
      alert('Select a space');
      return;
    }
    this.evService.createEvent(this.event).subscribe((data) => {
      console.log(data);
      if (data.message == true) {
        alert('Event Successfully Created!!');
      }
    });
  }
}
