import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordMatch } from 'src/app/shared/validators/password-match';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  form: FormGroup;

  get user() {
    return this.userService.userInfo;
  }

  constructor(private userService: UserService, private fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z\._]{6,}@gmail\.(com|bg)')]],
      passwords: this.fb.group({
        password: ['', [Validators.required, Validators.minLength(6)]],
        rePassword: ['', [Validators.required]],
      },
        {
          validators: [passwordMatch]
        })
    })
  }

  logoutHandler() {
    this.userService.logout();
  }

  changeInfoHandler() {

  }
}
