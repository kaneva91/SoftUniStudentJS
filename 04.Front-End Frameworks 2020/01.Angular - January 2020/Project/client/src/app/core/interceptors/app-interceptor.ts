import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const apiUrl = environment.apiURL;

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const fullUrl = req.url.includes('http') ? req.url : `${apiUrl}/${req.url}`
        const isApiRequest = fullUrl.includes(apiUrl);
        return next.handle(
            req.clone({ url: fullUrl, withCredentials: true })
        );
    }
}