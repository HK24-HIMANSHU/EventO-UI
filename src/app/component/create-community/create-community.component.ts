import { Component, Input, OnInit } from '@angular/core';
import { Community } from 'src/app/model/community';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.css'],
})
export class CreateCommunityComponent implements OnInit {
  user: any;
  community: Community = {
    Id: 0,
    InviteTokenId: 0,
    IsExclusive: false,
    IsPremium: false,
    Price: 0,
    Name: '',
    UserId: 0,
  } as Community;
  ngOnInit(): void {
    this.user = localStorage.getItem('userInfo');
    console.log(this.user);
    this.community.UserId = parseInt(this.user.Id);
  }
}
