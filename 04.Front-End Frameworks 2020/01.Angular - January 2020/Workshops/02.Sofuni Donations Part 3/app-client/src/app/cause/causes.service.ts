import { Injectable } from '@angular/core';
import{ICause} from '../shared/interfaces/cause';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CausesService {
  
  selectedCause : ICause;

  constructor(private http : HttpClient) {}

   getData(id? : string) {
    return this.http.get<any>(`http://localhost:3000/causes${id ? `/${id}` : ''}`)
  }
}
