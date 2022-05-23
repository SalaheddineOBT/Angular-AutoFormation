import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/User';
import { LangueService } from 'src/app/services/langue.service';
import { MessageService } from 'src/app/services/mesage.service';

@Component({
  selector: 'app-department-contact',
  templateUrl:'./departement-contact.component.html',
  styleUrls:["./department-contact.component.css"]
})

export class DepartmentContactComponent implements OnInit {

    public topics:any=[];
    public noNull=false;
    public check:boolean=false;
    submited=false;
    errorMsg:any="";

    public id=0;

    userModel=new User(++this.id,'','','','','','','','','',true);

    alerting = (v:any) => {
        //alert(v);
        v === "" ? this.noNull=false : this.noNull=true;
    };

  constructor(private langueService:LangueService,private messageService:MessageService) { };

  ngOnInit(): void {
    this.langueService.getAllLangues().subscribe(d => this.topics = d);
  };

  checkeding(){
    let ch:any=!this.check;
    this.check=ch;
  }; 

  submit=(dd:any)=>{
      console.log(dd)
      //this.messageService.PostData(this.userModel).subscribe(d => console.log(d),e=> this.errorMsg=e.statusText);
  }
}
