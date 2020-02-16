import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      console.log(req.url )
    
      const fullURL = req.url.includes('http') ? req.url : `${apiUrl}/${req.url}`;
      const isApiRequest = fullURL.includes(apiUrl);
     
      return next.handle(
        req.clone({ url: `http://localhost:9999/api/${req.url}`, withCredentials: true })
      );
    }
  }