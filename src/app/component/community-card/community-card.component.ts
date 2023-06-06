import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-community-card',
  templateUrl: './community-card.component.html',
  styleUrls: ['./community-card.component.css'],
})
export class CommunityCardComponent {
  @Input() title: string = 'Title';
  @Input() description: string = 'Description';
  @Input() rules: string = 'Rules';
  @Input() userProfile: string = 'User';
  @Input() memberJoined: string = '0';
}
