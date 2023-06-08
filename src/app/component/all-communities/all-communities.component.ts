import { Component } from '@angular/core';
import { Community } from 'src/app/model/community';
import { Event } from 'src/app/model/event';
import { CommunityService } from 'src/app/service/community.service';
import { EventService } from 'src/app/service/event.service';

@Component({
  selector: 'app-all-communities',
  templateUrl: './all-communities.component.html',
  styleUrls: ['./all-communities.component.css'],
})
export class AllCommunitiesComponent {
  coms: Community[] = [];
  constructor(private comService: CommunityService) {}
  ngOnInit(): void {
    this.comService.getAllCommunities().subscribe((data: Community[]) => {
      this.coms = data;
    });
  }
}
