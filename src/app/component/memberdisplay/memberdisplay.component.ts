import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-memberdisplay',
  templateUrl: './memberdisplay.component.html',
  styleUrls: ['./memberdisplay.component.css'],
})
export class MemberdisplayComponent implements OnInit {
  @Input() userProfile = [];

  users = [
    {
      Id: '1',
      Username: 'iuasxdas',
    },
    {
      Id: '2',
      Username: 'iuasxdas',
    },
  ];

  ngOnInit(): void {}
}
