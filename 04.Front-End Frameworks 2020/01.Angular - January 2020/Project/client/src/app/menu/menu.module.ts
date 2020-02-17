import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuRoutingModule } from './menu-rauting.module';
import { CateroriesComponent } from './components/caterories/caterories.component';
import { CaregoryItemsComponent } from './components/caregory-items/caregory-items.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [CateroriesComponent, CaregoryItemsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    AppRoutingModule
  ]
})
export class MenuModule { }
