import { Component, OnInit } from "@angular/core";
import { NaveService } from "./nave.service";

@Component({
    selector:'app-nave',
    templateUrl:'./nave.component.html',
    styleUrls:['./nave.component.css']
})

export class NaveComponent implements OnInit {
    
    lst;

    constructor(service:NaveService) { 
        //let service=new NaveService();
        this.lst=service.getAll();
     }
  
    ngOnInit(): void {
        
    }
    
}