import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css'],
})
export class UserDisplayComponent implements OnInit {
  ngOnInit(): void {}
  @Input() user: any;
}
