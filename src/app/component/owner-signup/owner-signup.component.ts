import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Owner } from 'src/app/model/owner';
import { OwnerAuthService } from 'src/app/service/owner-auth.service';

@Component({
  selector: 'app-owner-signup',
  templateUrl: './owner-signup.component.html',
  styleUrls: ['./owner-signup.component.css'],
})
export class OwnerSignupComponent {
  owner: Owner = {
    Id: 0,
    Username: '',
    Password: '',
    Email: '',
  } as Owner;

  constructor(
    private service: OwnerAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    this.service.signup(this.owner)?.subscribe((data) => {
      if (data.message == true) {
        alert('Sign Up successful!!');
        this.router.navigate(['owner/login']);
      } else {
        alert('Sign Up Failed!');
      }
    });
    // this.service.signup(this.owner).subscribe((data) => {
    //   alert('Added employee successful');
    //   this.router.navigate(['home']);
    // });
  }
}
