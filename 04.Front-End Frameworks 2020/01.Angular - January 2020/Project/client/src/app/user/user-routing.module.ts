import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: 'user',
    children: [
      {
        path: '',
        pathMatch: 'full',
        component: ProfileComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        }
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: false
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: false
        }
      },
      {
        path: 'cart',
        component: CartComponent,
        canActivate: [AuthGuard],
        data: {
          isLogged: true
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
