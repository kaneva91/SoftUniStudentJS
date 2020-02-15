import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { UserModule } from '../user/user.module';



@NgModule({
  declarations: [NavComponent, FooterComponent],
  imports: [
    CommonModule,
    UserModule,
    AppRoutingModule
  ],
  exports : [NavComponent, FooterComponent]
})
export class CoreModule { }
