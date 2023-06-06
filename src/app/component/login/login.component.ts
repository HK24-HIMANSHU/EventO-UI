import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  toggle: boolean = false;

  onToggle() {

    this.toggle = !this.toggle;
  }
}
