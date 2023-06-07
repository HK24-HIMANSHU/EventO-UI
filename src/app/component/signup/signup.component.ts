import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  user: User = {
    Id: 0,
    Username: '',
    Password: '',
    Email: '',
  } as User;

  constructor(
    private service: UserAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    this.service.signup(this.user)?.subscribe((data) => {
      if (data.message == true) {
        alert('Sign Up successful!!');
        this.router.navigate(['user/login']);
      } else {
        alert('Sign Up Failed!');
      }
    });
  }
}
