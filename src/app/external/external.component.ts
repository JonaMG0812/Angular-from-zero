import { Component, OnInit } from '@angular/core';
import { PetitionsService } from '../services/petitions.service';

@Component({
  selector: 'app-external',
  templateUrl: './external.component.html',
  styleUrls: ['./external.component.css'],
  providers: [PetitionsService]
})
export class ExternalComponent implements OnInit {

  public user: any;
  public mydate: any;
  public new_user: any;
  public user_saved;

  constructor(
    private _petitionsService: PetitionsService
  ){
    this.new_user = {
        "name": "",
        "job": ""
    }
   }

  ngOnInit() {
    this.mydate = new Date();

    this._petitionsService.getUser().subscribe(
      result =>{
        this.user =  result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

  onSubmit(form){
    this._petitionsService.addUser(this.new_user).subscribe(
      response =>{
        this.user_saved = response;
        form.reset();
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
