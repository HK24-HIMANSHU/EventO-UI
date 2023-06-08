import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-main',
  templateUrl: './navbar-main.component.html',
  styleUrls: ['./navbar-main.component.css'],
})
export class NavbarMainComponent {
  id: number = parseInt(JSON.parse(localStorage.getItem('userInfo')!).id);
}
