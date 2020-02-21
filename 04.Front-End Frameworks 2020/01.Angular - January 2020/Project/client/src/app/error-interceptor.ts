import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.body && evt.body.success)
                        this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-upper-center' });
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                      if (err.status === 200) {return}
                      else if(err.url === 'http://localhost:9999/api/user/register'){
                        this.toasterService.error('Username already taken!!', err.error.title);
                        return;
                  
                      }
                      else if(err.url === 'http://localhost:9999/api/user/login'){
                        this.toasterService.error('Invalid username or password!!!', err.error.title,);
        
                      }
                    } catch(e) {
                        this.toasterService.error('An error occurred', '');
                    }
                }
                return of(err);
            }));
      }
      
}