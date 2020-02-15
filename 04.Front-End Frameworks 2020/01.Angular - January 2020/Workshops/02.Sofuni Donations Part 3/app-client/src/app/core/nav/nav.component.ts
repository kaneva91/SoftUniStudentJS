import { Component } from '@angular/core';
import { UserService } from 'src/app/user/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  get isLogged() { return this.userService.isLogged; }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

 

  logoutHandler() {
    this.userService.logout();
    this.router.navigate(['']);
  }


}
