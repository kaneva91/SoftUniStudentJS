import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [{
  path: "",
  pathMatch: 'full',
  component: HomeComponent,
  canActivate: [AuthGuard],
  data: {
    isLogged: true
  }
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // {enableTracing: true}
  exports: [RouterModule]
})
export class AppRoutingModule { }
