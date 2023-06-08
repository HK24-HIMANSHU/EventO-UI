import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-memberdisplay',
  templateUrl: './memberdisplay.component.html',
  styleUrls: ['./memberdisplay.component.css'],
})
export class MemberdisplayComponent implements OnInit {
  constructor(private userService: UserService) {}
  @Input() userProfile: any = [];
  count: number = 0;

  us: any = {
    Id: 0,
    Username: '',
  };
  curr: any = [];

  ngOnInit(): void {
    console.log(this.userProfile, 'userProfile');
    this.userProfile.forEach((user: any) => {
      this.userService
        .getUserById(this.userProfile.userId)
        .subscribe((data) => {
          console.log(data, 'dataaaa');
        });
      this.us.Id = user.id;
      this.us.Username = user.username;
    });
  }
}
