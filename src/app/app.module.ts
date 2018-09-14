import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing'

import { AppComponent } from './app.component';
import { VideogameComponent } from './videogame/videogame.component';
import { ShoesComponent} from './shoes/shoes.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    ShoesComponent,
    CoursesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
