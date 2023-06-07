import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user = {
    Email: '',
    Password: '',
  };

  constructor(
    private service: UserAuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onSubmit() {
    console.log(this.user);
    this.service.login(this.user).subscribe((data) => {
      // alert('Sign Up successful!!');
      this.router.navigate(['allevent']);
      localStorage.setItem('userInfo', JSON.stringify(data));
      console.log(data);
    });
  }
}
