import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppInterceptor } from './interceptors/app-interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers : [{
    provide : [HTTP_INTERCEPTORS],
    useClass : AppInterceptor,
    multi : true
  }]
})
export class CoreModule { }
