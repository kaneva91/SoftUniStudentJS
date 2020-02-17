import { Injectable } from "@angular/core";
import { UserService } from '../services/user.service';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{
    constructor(
        private userService: UserService,
        private router:Router
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state:RouterStateSnapshot){
        const auth = this.userService.isLogged === route.data.isLogged;
        if(auth){
            return true;
        }
        this.router.navigate(['/user/login']);
        return false;
    }
}