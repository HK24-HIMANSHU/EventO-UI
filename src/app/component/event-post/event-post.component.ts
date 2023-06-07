import { Component, Input, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.css'],
})
export class EventPostComponent implements OnInit {
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() rules: string = 'Rules';
  @Input() userProfile: any = 'User';
  @Input() memberJoined: string = '0';
  @Input() getUser: string = 'false';
  constructor(private userService: UserAuthService) {}
  ngOnInit(): void {
    // if (this.getUser != 'false') {
    //   this.userService
    //     .getUserById(parseInt(this.userProfile))
    //     .subscribe((data) => {
    //       this.userProfile = data;
    //     });
    // }
  }
}
