import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
    selector:'app-event',
    //template:``,
    templateUrl:'./event.component.html',
    styleUrls:['./event.component.css']
})

export class EventComponent implements OnInit{

    @Input() event:any;

    @Output() eventClick=new EventEmitter();

    someprop:any='same value';

    constructor(){};

    ngOnInit(): void {
        
    };

    handleClick(){
        //console.log('clicked !');
        this.eventClick.emit(this.event.name);
    };

    logFoo(){
        console.log('foo');
    };

}