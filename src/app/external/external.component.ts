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

  constructor(
    private _petitionsService: PetitionsService
  ){

   }

  ngOnInit() {
    this._petitionsService.getUser().subscribe(
      result =>{
        this.user =  result.data;
      },
      error =>{
        console.log(<any>error);
      }
    );
  }

}
