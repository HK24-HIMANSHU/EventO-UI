import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Community } from 'src/app/model/community';
import { CommunityMember } from 'src/app/model/community-member';
import { CommunityMembersService } from 'src/app/service/community-members.service';
import { CommunityService } from 'src/app/service/community.service';
@Component({
  selector: 'app-community-details',
  templateUrl: './community-details.component.html',
  styleUrls: ['./community-details.component.css'],
})
export class CommunityDetailsComponent {
  constructor(
    private route: ActivatedRoute,

    private cmService: CommunityService,
    private memberService: CommunityMembersService
  ) {}
  com: Community = {} as Community;
  id: any;
  joined: boolean = true;
  myComs = [];
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
        } else {
          this.memberService
            .getUserJoinedCommunities(this.id)
            .subscribe((data) => {
              this.myComs = data;
              console.log(data);

              this.myComs.forEach((us: any) => {
                console.log('us', us.communityId);
                if (this.id == us.communityId) {
                  this.joined = true;
                }
              });
            });
        }
      });
    });
  }

  onDeleteCommunity() {}

  onJoin() {}
}
