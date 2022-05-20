import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartementComponent } from './departements//departement/departement.component';
import { DetailsdepartementComponent } from './departements/detailsdepartement/detailsdepartement.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },{
        path:'register',
        component:RegisterComponent
    },{
        path:'home/:username/:id',
        component:HomeComponent
    },{
        path:'departement',
        component:DepartementComponent
    },{
        path:'detailDepartement/:id',
        component:DetailsdepartementComponent
    },{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },{
        path:'**',
        component:PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents=[
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    PageNotFoundComponent,
    DepartementComponent,
    DetailsdepartementComponent
];