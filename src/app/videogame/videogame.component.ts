import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
    selector: 'videogame',
    templateUrl: './videogame.component.html'
})

export class VideogameComponent implements OnInit, DoCheck, OnDestroy{
    public title: string;
    public list: string;

    constructor(){
        this.title = 'Videogames component';
        this.list = 'Most popular videogames'
        console.log('Your component videogame.component is loaded');
    }
    
    ngOnInit(){
        //console.log('OnInit exeuted');
    }

    ngDoCheck(){
        //console.log('DoCheck executed');
    }

    ngOnDestroy(){
        //console.log('OnDestroy executed');   
    }

    SwitchTitle(){
        this.title = 'New component title';
    }

}