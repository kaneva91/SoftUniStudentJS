import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordMatchDirective } from './directives/password-match.directive';



@NgModule({
  declarations: [PasswordMatchDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
