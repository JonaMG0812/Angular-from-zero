import {Component, OnInit} from '@angular/core';
import { Shoe } from '../Models/shoe';

@Component({
    selector: 'shoes',
    templateUrl: './shoes.component.html'
})

export class ShoesComponent implements OnInit{
    public ShoesTitle: string = 'Shoes Component';
    public ShoesList: string = 'Most popular shoes';
    public Shoes: Array<Shoe>;
    public ShoesBrands: string[];
    public color: string;

    constructor(){
        this.color = 'Black';
        this.ShoesBrands = new Array();
        this.Shoes = [
            new Shoe('AirMG0812', 'Nike', 2500, 'Red', true),
            new Shoe('Runner', 'Adidas', 1500, 'White', true),
            new Shoe('Air Confort', 'New Balance', 2200, 'Blue', false),
            new Shoe('Converse', 'Converse', 1800, 'Black', true),
            new Shoe('Vanta Black', 'Vanta', 1600, 'Black', false),
            new Shoe('Air Max', 'Nike', 1200, 'Brown', false)
        ];
    }

    ngOnInit(){
        console.log(this.Shoes);
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

    /*
    constructor(){
        this.ShoesTitle = 'Videogames component';
        this.ShoesList = 'Most popular videogames'
        console.log('Your component shoes.component is loaded');
    }
    */
}