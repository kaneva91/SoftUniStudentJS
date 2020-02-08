import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [
    {
        path: 'user',
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: UserComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: false,
                    path: 'user'
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
                path: 'logout',
                redirectTo: '/',
                canActivate: [AuthGuard],
                data: {
                    isLogged: false
                }
            },
            {
                path: 'profile',
                component: ProfileComponent,
                canActivate: [AuthGuard],
                data: {
                    isLogged: true
                }
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
