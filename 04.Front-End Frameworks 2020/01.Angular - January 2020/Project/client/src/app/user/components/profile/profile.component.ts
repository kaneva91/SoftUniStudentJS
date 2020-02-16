import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   get currentUser(){
     return this.userService.userInfo;
   }

  constructor(private userService : UserService) {
   
   }

  ngOnInit() {
  }

}
