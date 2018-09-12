import { Component } from '@angular/core';
import { config } from './Models/config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'Angular from zero';
  public desc: string; 

  constructor(){
    this.title = config.title;
    this.desc = config.desc;
  }
}
