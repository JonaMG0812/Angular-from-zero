import { Component } from '@angular/core';

@Component({
    selector: 'videogame',
    templateUrl: './videogame.component.html'
})

export class VideogameComponent{
    constructor(){
        console.log('Your component videogame.component is loaded');
    }
}