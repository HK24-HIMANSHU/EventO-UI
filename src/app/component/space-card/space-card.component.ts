import { Component } from '@angular/core';
import { Space } from 'src/app/model/space';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.css']
})
export class SpaceCardComponent {
  spaces = [{ id: 1, Name: "MyProp", Capacity: 12, Amenities: "Rules", Price: 21 }];
  constructor(
    private eventService: EventService,
  ) { }
  // ngOnInit(): void {
  //   let obEvents = this.eventService.getAllEvents();
  //   obEvents.subscribe((data: Space[]) => {
  //     this.spaces = data;
  //   });

  // }
}
