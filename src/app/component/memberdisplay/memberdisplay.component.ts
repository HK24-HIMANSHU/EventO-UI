import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memberdisplay',
  templateUrl: './memberdisplay.component.html',
  styleUrls: ['./memberdisplay.component.css']
})
export class MemberdisplayComponent {
  @Input() userProfile: string = "userProfile"
}
