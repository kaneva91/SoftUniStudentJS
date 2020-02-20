import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NontFoundComponent } from './components/nont-found/nont-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch : 'full',
    component : HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
  ,{
    path: '**',
    component : NontFoundComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
