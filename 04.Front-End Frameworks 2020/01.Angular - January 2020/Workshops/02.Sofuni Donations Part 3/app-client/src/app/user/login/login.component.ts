import { Component, Input, ViewChild, ElementRef, } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../form-styles.scss']
})


export class LoginComponent {

 // @ViewChild('emailInput', { static: false }) emailInput :ElementRef<HTMLInputElement>;

  constructor(private userService: UserService, private router: Router) {
   
   }
   

  loginHandler(email: string, password: string) {
    this.userService.login(email, password)
    this.router.navigate(['']);
  }
}
