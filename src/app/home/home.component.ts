import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public login: boolean;

  constructor() {
    this.login = false;
   }

  ngOnInit() {
  }

  setLog(){
    this.login = true;
  }

  unsetLog(){
    this.login =  false;
  }

}
