import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommunityService } from 'src/app/service/community.service';
import { EventService } from 'src/app/service/event.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css'],
})
export class UserHomePageComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private evService: EventService,
    private userService: UserService,
    private communityService: CommunityService
  ) {}
  userId: number = 0;
  user: any = {};
  ngOnInit(): void {
    this.route.paramMap.subscribe((parameters: ParamMap) => {
      this.userId = Number.parseInt(parameters.get('id')!);
      this.userService.getUserById(this.userId).subscribe((data) => {
        console.log(data);
      });
    });
  }
}
