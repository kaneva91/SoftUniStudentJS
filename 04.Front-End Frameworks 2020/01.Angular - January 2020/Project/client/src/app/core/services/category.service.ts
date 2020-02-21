import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../../shared/interfaces/user-interface';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/interfaces/product-interface';
import { ICategory } from 'src/app/shared/interfaces/category-interface';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getCategories() : Observable<ICategory[]>{
    return this.http.get<ICategory[] >('category/get')
  }
}