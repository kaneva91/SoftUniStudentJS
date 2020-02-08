import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreateComponent } from '../cause/create/create.component'
import { NotFoundComponent } from '../not-found/not-found.component';
import { CauseComponent } from './cause/cause.component';



const routes: Routes = [
    {
        path: 'cause',
        pathMatch: "full",
        redirectTo: '/cause/create'
    },
    {
        path: 'cause/create', 
        component: CreateComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true
        },
    },
    {
        path: 'cause/:id',
        component: CauseComponent,
        canActivate: [AuthGuard],
        data: {
            isLogged: true
        },
    },
    {
        path: '**',
        component: NotFoundComponent
    } 
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CauseRoutingModule { }
