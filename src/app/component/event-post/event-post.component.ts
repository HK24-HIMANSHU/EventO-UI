import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-event-post',
  templateUrl: './event-post.component.html',
  styleUrls: ['./event-post.component.css']
})
export class EventPostComponent {
  @Input() title: string = "Title"
  @Input() description: string = "Description"
  @Input() rules: string = "Rules"
  @Input() userProfile: string = "User"
  @Input() memberJoined: string = "0"
}
