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
    id: 0,
    inviteTokenId: 0,
    isExclusive: false,
    isPremium: false,
    price: 0,
    name: '',
    userId: 0,
  } as Community;
  ngOnInit(): void {
    this.user = localStorage.getItem('userInfo');
    console.log(this.user);
    this.community.userId = parseInt(this.user.Id);
  }
}
