import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../form-style.css']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.loginForm = fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    })
  }

  loginHandler(user) {
    this.userService.login(user).subscribe(resp => {
      console.log(resp)
      this.userService.hasLoggedIn = user; //works fine
      this.router.navigate(['']);
    })
  }

}
