import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product-interface';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http : HttpClient) { }

  getProducts(query) : Observable<IProduct[]>{
      return this.http.get<any>('product/all', {params :{
        query 
    }})
  }

 
}
