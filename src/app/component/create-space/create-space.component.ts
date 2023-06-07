import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Owner } from 'src/app/model/owner';
import { Space } from 'src/app/model/space';
import { SpaceService } from 'src/app/service/space.service';

@Component({
  selector: 'app-create-space',
  templateUrl: './create-space.component.html',
  styleUrls: ['./create-space.component.css'],
})
export class CreateSpaceComponent implements OnInit {
  constructor(private spService: SpaceService, private router: Router) {}
  owner: Owner = {
    Id: 0,
    Email: '',
    Password: '',
    Username: '',
  } as Owner;
  temp: any;
  space: Space = {
    id: 0,
    name: '',
    capacity: 0,
    location: '',
    amenities: '',
    createdAt: new Date(),
    adminId: 0,
    price: 0,
  };
  ngOnInit(): void {
    this.temp = JSON.parse(localStorage.getItem('ownerInfo')!);
    this.owner.Id = this.temp.id;
    this.owner.Email = this.temp.email;
    this.owner.Username = this.temp.username;
    this.space.adminId = this.temp.id;
  }

  onCreate() {
    this.spService.createSpace(this.space, this.owner.Id).subscribe((data) => {
      alert('Space created');
      this.router.navigate(['ownerhome']);
    });
  }
}
