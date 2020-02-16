import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user-interface';
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser = null;

  get userInfo() {
    return this.user;
  }

  get isLogged() {
    return !!this.user
  }
  set hasLoggedIn(value) {
    this.user = value;
  }

  authCompleted$ = this.http.get('auth').pipe(shareReplay(1));

  constructor(private http: HttpClient) {
    this.authCompleted$.subscribe((user: any) => {
      this.user = user;
    }, () => {
      this.user = null;
    });
   }

  regiter(dataInput) {

    const { firstName, lastName, email, passwords } = dataInput;
    const { password } = passwords;
    const data: IUser = { firstName, lastName, email, password };

    console.log(data)
    return this.http.post<IUser>('user/register', data)

  }

  login(data) {
    return this.http.post('user/login', data).pipe(tap((user: any) => {
      console.log('login')
      this.user = user;
    }));

  }

  loguot() {
    return this.http.post('user/logout', {}).pipe(tap((user:any) => {
      this.user = null;
    }));
  }

  delteProfile(){
    return this.http.get('user/delete')
  }

 /*  handleError(error) {
    //let errorMessage = '';
    if (error.status === 500) {
      console.log(error.status)
      return throwError(error);

    }
  } */
  }