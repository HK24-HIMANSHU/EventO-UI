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
  joined: boolean = false;
  members:any = [];
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
          this.cmService.getCommunityPlainById(this.id).subscribe((data) => {
            console.log(data);
            this.members = data.members;
            this.members.forEach((ele: any) => {
              this.thisUser.id = ele.userId;
              this.joined = true;
            });
          });
        }
      });
    });
  }

  onDeleteCommunity() {}

  onJoin() {
    this.memberService
      .createMember(this.id, this.thisUser.id)
      .subscribe((data) => {
        console.log(data);
        this.joined == true;
      });
    this.ngOnInit();
  }
}
