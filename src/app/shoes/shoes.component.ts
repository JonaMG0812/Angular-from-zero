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
    public ShoeBrands: string[];

    constructor(){
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
    }

    ShoeBrands(){
        this.Shoes.forEach((shoe, index) => {
            ShoeBrands.push(shoe.brand);
        });
    }

    /*
    constructor(){
        this.ShoesTitle = 'Videogames component';
        this.ShoesList = 'Most popular videogames'
        console.log('Your component shoes.component is loaded');
    }
    */

    

}