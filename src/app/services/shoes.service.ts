import { Injectable } from '@angular/core';
import { Shoe } from '../Models/shoe'

@Injectable()
export class ShoeService{
    public Shoes: Array<Shoe>;

    constructor(){
        this.Shoes = [
            new Shoe('AirMG0812', 'Nike', 2500, 'Red', true),
            new Shoe('Runner', 'Adidas', 1500, 'Green', true),
            new Shoe('Air Confort', 'New Balance', 2200, 'Blue', false),
            new Shoe('Converse', 'Converse', 1800, 'Black', true),
            new Shoe('Vanta Black', 'Vanta', 1600, 'Black', false),
            new Shoe('Air Max', 'Nike', 1200, 'Brown', false)
        ];
    }

    getText(){
        return "Hello World from a service";
    }

    getShoe(): Array<Shoe>{
        return this.Shoes;
    }
}