import { Component } from '@angular/core';

@Component({
    selector: 'videogame',
    templateUrl: './videogame.component.html'
})

export class VideogameComponent{
    public title: string;
    public list: string;

    constructor(){
        this.title = 'Videogames component';
        this.list = 'Most popular videogames'
        console.log('Your component videogame.component is loaded');
    }
}