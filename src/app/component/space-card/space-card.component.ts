import { Component, Input, OnInit } from '@angular/core';
import { Space } from 'src/app/model/space';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-space-card',
  templateUrl: './space-card.component.html',
  styleUrls: ['./space-card.component.css'],
})
export class SpaceCardComponent {
  @Input() name: string = 'Title';
  @Input() capacity: string = '0';
  @Input() price: string = '0';
  @Input() location: string = 'Location';
  @Input() Amenities: string = 'Amentities';
  constructor() {}
}
