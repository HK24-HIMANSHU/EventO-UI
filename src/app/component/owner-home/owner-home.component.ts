import { Component } from '@angular/core';
import { Event } from 'src/app/model/event';
import { Space } from 'src/app/model/space';
import { SpaceService } from 'src/app/service/space.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.css'],
})
export class OwnerHomeComponent {
  events: Event[] = [];
  spaces: Space[] = [];
  ownerInfo = JSON.parse(localStorage.getItem('ownerInfo')!);
  constructor(private spaceService: SpaceService) {}
  ngOnInit(): void {
    this.spaceService.getSpaceByOwnerId(parseInt(this.ownerInfo.id)).subscribe((data) => {
      this.spaces = data;
    });
  }
}
