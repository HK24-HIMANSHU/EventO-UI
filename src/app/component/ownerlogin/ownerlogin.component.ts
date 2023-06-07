import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OwnerAuthService } from 'src/app/service/owner-auth.service';

@Component({
  selector: 'app-ownerlogin',
  templateUrl: './ownerlogin.component.html',
  styleUrls: ['./ownerlogin.component.css'],
})
export class OwnerloginComponent {
  user = {
    Email: '',
    Password: '',
  };

  constructor(
    private service: OwnerAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.user);
    this.service.login(this.user).subscribe((data) => {
      // alert('Sign Up successful!!');
      this.router.navigate(['allevent']);
      console.log(data);
    });
  }
}
