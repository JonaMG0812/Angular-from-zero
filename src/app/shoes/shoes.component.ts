import {Component, OnInit} from '@angular/core';
import { Shoe } from '../Models/shoe';
import { ShoeService } from '../services/shoes.service';

@Component({
    selector: 'shoes',
    templateUrl: './shoes.component.html',
    providers: [ShoeService]
})

export class ShoesComponent implements OnInit{
    public ShoesTitle: string = 'Shoes Component';
    public ShoesList: string = 'Most popular shoes';
    public Shoes: Array<Shoe>;
    public ShoesBrands: string[];
    public color: string;
    public myBrand: string;

    constructor(
        private _shoeService: ShoeService
    ){
        this.color = 'black';
        this.ShoesBrands = new Array();
    }

    ngOnInit(){
        this.Shoes = this._shoeService.getShoe();
        //alert(this._shoeService.getText());
        this.getBrands();
        
    }

    getBrands(){
        this.Shoes.forEach((shoe, index) => {
            /*Deleting elements duplicate */
            if(this.ShoesBrands.indexOf(shoe.brand) < 0){
                this.ShoesBrands.push(shoe.brand);
            }
            //console.log(index);
        });

        console.log(this.ShoesBrands);
    }

    getBrand(){
        alert(this.myBrand);
    }

    addBrand(){
        this.ShoesBrands.push(this.myBrand);
    }

    delBrand(index){
        //delete this.ShoesBrands[index];
        this.ShoesBrands.splice(index, 1);
    }

    showBrand(){
        alert(this.myBrand);
    }
}