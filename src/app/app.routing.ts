//Importing angular routing modules
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Importing components
import { HomeComponent } from './home/home.component'
import { ShoesComponent } from './shoes/shoes.component';
import { VideogameComponent } from './videogame/videogame.component';
import { CoursesComponent } from './courses/courses.component';
import { ExternalComponent } from './external/external.component'

//Config routes array
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'shoes', component: ShoesComponent},
    {path: 'videogames', component: VideogameComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'external', component: ExternalComponent},
    {path: '**', component: HomeComponent}
];

//Exporting router module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);