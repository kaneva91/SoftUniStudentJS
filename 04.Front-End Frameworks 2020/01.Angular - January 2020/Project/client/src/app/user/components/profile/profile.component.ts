import { Component } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  get currentUser() {
    return this.userService.userInfo;
  }

  private profileForm: FormGroup;


  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router) {
    this.profileForm = fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email: [`${this.userService.userInfo.email}`,],
    })
  }

  LogoutHandler() {
    this.userService.loguot().subscribe(resp => {
      console.log(resp)
      this.router.navigate([''])
    })
  }

  deleteProfileHandler() {
    const userId = this.userService.userInfo.id
    this.userService.delteProfile(userId).subscribe(() =>
      this.router.navigate([''])
    )
  }

  editProfileHandler(data){
    const userId = this.userService.userInfo.id;
    this.userService.editProfile(data).subscribe(res=> console.log(res))
    console.log(data)
  }
}
