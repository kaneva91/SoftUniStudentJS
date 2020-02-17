import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CateroriesComponent } from './components/caterories/caterories.component';
import { CaregoryItemsComponent } from './components/caregory-items/caregory-items.component';


const routes: Routes = [
    {
      path: 'menu',
      children: [
        {
          path: '',
          pathMatch: 'full',
          component: CateroriesComponent,
        },
        {
          path: 'pizza',
          component: CaregoryItemsComponent,
    
        },
        {
          path: 'tagliatelle',
          component: CaregoryItemsComponent,
          
        },
        {
          path: 'salad',
          component: CaregoryItemsComponent,
         
        },
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MenuRoutingModule { }
