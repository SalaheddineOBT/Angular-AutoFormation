import { Component } from "@angular/core";

@Component({
    selector:'app-event2',
    template:`<h1>Hello from Event 2</h1>
        <app-event #thumbnail (eventClick)="handleClicked($event)" [event]="event"></app-event>
        <button (click)="thumbnail.logFoo()">Click Again</button>
        <h3>{{thumbnail.someprop}}</h3>`
})

export class Event2Component{
    event={
        id:1,
        name:'Angular Connect',
        date:'9/26/2036',
        time:'10:00 am',
        price:599.99,
        imageUrl:'/assets/images/angular-connect-shield.png',
        location:{
          address:'1057 DT',
          city:'London',
          country:'England'
        }
    };
    
    handleClicked(data:any){
        console.log(data)
    };
}