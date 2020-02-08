import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  get user() {
    return this.userService.userInfo;
  }

  constructor(private userService: UserService) { }

  logoutHandler() {
    this.userService.logout();
  }

  changeInfoHandler() {

  }
}
