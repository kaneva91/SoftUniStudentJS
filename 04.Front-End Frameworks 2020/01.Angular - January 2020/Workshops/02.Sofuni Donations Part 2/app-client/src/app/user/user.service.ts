import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user : {email : string; password : string} = null;

  get userInfo(){
    return this.user;
  }

  get isLogged(){
    return !!this.user;
  }

   constructor(){
      this.user = JSON.parse(localStorage.getItem('user')) || null;
      console.log(this.user)
      }
 
  login(email : string, password: string){
    this.user = {email, password};
    localStorage.setItem('user', JSON.stringify(this.user))
  }

  logout(){
    localStorage.removeItem('user');
    this.user = null;
    console.log(this.user)
  }

  register(){
    
  }
}
