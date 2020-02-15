import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: 'user',
    children : [
        {
            path: '',
            pathMatch : 'full',
            redirectTo : 'login'
        },
        {
            path : 'login',
            component : LoginComponent
        },
        {
            path: 'register',
            component : RegisterComponent
        },
        {
          path: 'profile',
          component : ProfileComponent
        },
        {
            path : 'logout',
            component : LogoutComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
