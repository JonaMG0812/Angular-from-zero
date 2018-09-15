import { Component, OnInit } from '@angular/core';
import { ContactUser } from '../Models/contactUser'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public user: ContactUser;
  constructor() {
    this.user = new ContactUser('','','','')
   }

  ngOnInit() {
  }

  onSubmit(form){
    console.log("Submit");
    console.log(this.user);
    //form.reset();
  }

}
