import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   get currentUser(){
     return this.userService.userInfo;
   }

  constructor(private userService : UserService,
        private router : Router) {
   }

   LogoutHandler(){
     this.userService.loguot().subscribe(resp=>{
     console.log(resp)
      this.router.navigate([''])
     })
   }

   deleteProfileHandler(){
    this.userService.delteProfile().subscribe(resp=>{
      console.log(resp)
    
    })  //throws error
   this.router.navigate(['']) 
  }

  ngOnInit() {
  }

}
