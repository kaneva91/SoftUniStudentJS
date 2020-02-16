import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    pathMatch : 'full',
    component : HomeComponent
  },
 { path : 'test',
  component : TestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
