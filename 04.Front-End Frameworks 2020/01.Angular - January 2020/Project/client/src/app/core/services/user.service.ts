import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user-interface';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user = null;

  get isLogged() {
    return !!this.user
  }
  set hasLoggedIn(value) {
    this.user = value;
  }

  constructor(private http: HttpClient) { }

  regiter(data: IUser): Observable<IUser> {
    return this.http.post<IUser>('user/register', data, {withCredentials: true})
  }

  login(data: IUser) {
    return this.http.post<IUser>('/user/login', data).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  loguot(){
    return this.http.get<IUser>('/user/logout')
  }

  handleError(error) {
    //let errorMessage = '';
    if (error.status === 500) {
      console.log(error.status)
      return throwError(error);

    }
  }
}