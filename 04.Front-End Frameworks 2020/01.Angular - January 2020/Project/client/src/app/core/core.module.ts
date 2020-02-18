import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [],
  providers :[AuthGuard],
  imports: [
    CommonModule,
   // BrowserAnimationsModule, ToastrModule.forRoot()
  ],
  
})
export class CoreModule { }
