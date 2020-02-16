import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


const routes: Routes = [
  {
    path: 'user',
    children : [
        {
            path: '',
            pathMatch : 'full',
            redirectTo : '/'
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
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
