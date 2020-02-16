import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IUser } from '../../../shared/interfaces/user-interface';

import { Router } from '@angular/router';
import { userConfig } from '../../user-config';
import { passwordMatch } from 'src/app/shared/directives/password-match';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../../form-style.css']
})
export class RegisterComponent {

  registerForm: FormGroup;
  private pattern = userConfig.emailPattern;
  constructor(private fb: FormBuilder,
    private userService: UserService,
    private router: Router) {
    this.registerForm = fb.group({
      email: ['', [Validators.required, Validators.pattern(this.pattern)]],
      firstName: ['', Validators.required,],
      lastName: ['', Validators.required],
      passwords: this.fb.group({
        password: ['', [Validators.required]],
        rePassword: ['', [Validators.required]]
      },
        {
          validators: [passwordMatch]
        }),
    })
  }

  registerHandler(data: IUser) {

    this.userService.regiter(data).subscribe(res => console.log(res))

  }

}
