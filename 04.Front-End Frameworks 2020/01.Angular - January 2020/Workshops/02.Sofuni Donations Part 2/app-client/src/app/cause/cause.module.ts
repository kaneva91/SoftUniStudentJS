import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauseComponent } from './cause/cause.component';
import { CreateComponent } from './create/create.component';
import { CauseRoutingModule } from './cause-routing.module';



@NgModule({
  declarations: [CauseComponent, CreateComponent],
  imports: [
    CommonModule,
    CauseRoutingModule
  ],
  exports : [CauseComponent]
})
export class CauseModule { }
