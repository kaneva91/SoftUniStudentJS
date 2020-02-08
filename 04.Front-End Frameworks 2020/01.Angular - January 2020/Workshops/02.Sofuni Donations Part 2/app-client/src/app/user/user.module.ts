import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {UserRoutingModule} from '../user/user-routing.module';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, UserComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports : [LoginComponent, RegisterComponent]
})
export class UserModule { }
