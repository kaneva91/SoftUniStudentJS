import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';



@NgModule({
  declarations: [],
  providers :[AuthGuard],
  imports: [
    CommonModule
  ],
  
})
export class CoreModule { }
