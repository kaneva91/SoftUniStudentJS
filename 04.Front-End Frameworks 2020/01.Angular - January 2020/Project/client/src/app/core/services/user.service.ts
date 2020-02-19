import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user-interface';
import { tap, shareReplay } from 'rxjs/operators';
import { IProduct } from 'src/app/shared/interfaces/product-interface';

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
    return this.http.post<IUser>('user/register', data)

  }

  login(data) {
    return this.http.post('user/login', data).pipe(tap((user: any) => {
      this.user = user;
    }));
  }

  loguot() {
    return this.http.post('user/logout', {}).pipe(tap(() => {
/*       this.user = null;
      console.log(this.user) */
    }));
  }

  delteProfile(id: String) {
    return this.http.delete(`user/${id}`).pipe(tap(() => {
    }))
  };

  editProfile(data) {
    return this.http.put(`user/${this.user.id}`,data)

  }

  addToCart(product : IProduct){
    return this.http.put(`user/add/${this.user.id}`, product)
  }

  getCartItems(){
    return this.http.get(`user/get/${this.user.id}`)
  }

  /*  handleError(error) {
     //let errorMessage = '';
     if (error.status === 500) {
       console.log(error.status)
       return throwError(error);
 
     }
   } */
}