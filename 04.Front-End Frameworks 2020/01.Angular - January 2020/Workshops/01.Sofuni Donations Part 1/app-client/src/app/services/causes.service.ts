import { Injectable } from '@angular/core';
import{ICause} from '../interfaces/cause';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CausesService {
  
  selectedCause : ICause;

  constructor(private http : HttpClient) {}

   LoadCauses() {
    return this.http.get<ICause[]>('http://localhost:3000/causes')
  }
}
