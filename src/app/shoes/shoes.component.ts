import {Component} from '@angular/core'

@Component({
    selector: 'shoes',
    templateUrl: './shoes.component.html'
})

export class ShoesComponent {
    public ShoesTitle: string = 'Shoes Component';
    public ShoesList: string = 'Most popular shoes';

    /*
    constructor(){
        this.ShoesTitle = 'Videogames component';
        this.ShoesList = 'Most popular videogames'
        console.log('Your component shoes.component is loaded');
    }
    */

}