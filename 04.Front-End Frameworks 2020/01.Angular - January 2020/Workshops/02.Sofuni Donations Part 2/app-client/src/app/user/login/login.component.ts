import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private router : Router) { }

  loginHandler(email: string, password: string) {
    if (email && password) {
      this.userService.login(email, password);
     this.router.navigate(['']);
    }
  }
}
