import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CauseComponent } from './cause/cause.component';
import { CreateComponent } from './create/create.component';
import { CauseRoutingModule } from './cause-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CauseComponent, CreateComponent],
  imports: [
    CommonModule,
    CauseRoutingModule,
    ReactiveFormsModule
  ],
  exports : [CauseComponent]
})
export class CauseModule { }
