import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Community } from 'src/app/model/community';
import { CommunityService } from 'src/app/service/community.service';
@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css'],
})
export class CommunityDetailsComponent {
  constructor(
    private route: ActivatedRoute,

    private cmService: CommunityService
  ) {}
  com: Community = {} as Community;
  id: any;
  thisUser: any;
  isMine: boolean = false;
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.id = parameters.get('id');
      this.cmService.getCommunityById(parseInt(this.id)).subscribe((data) => {
        this.com = data;
        this.thisUser = JSON.parse(localStorage.getItem('userInfo')!);

        if (this.thisUser.id == data.id) {
          this.isMine = true;
        }
      });
    });
  }

  onDeleteCommunity() {}

  onJoin() {}
}
