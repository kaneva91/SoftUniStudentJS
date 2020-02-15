import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { IUser } from '../../../shared/interfaces/user-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private userService : UserService,
    private router : Router) {
    this.loginForm = fb.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    })
  }

  ngOnInit() {
  }
  loginHandler(user: IUser){
      this.userService.login(user).subscribe(resp => {
         console.log(resp)
        this.userService.hasLoggedIn = user; //works fine
        this.router.navigate(['']);
      })
  }

}
