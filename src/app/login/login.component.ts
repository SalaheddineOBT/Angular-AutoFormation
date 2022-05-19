import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { PersonneService } from '../services/personne.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    // @Input()
    // public title:any;
    //========
    @Input('title') public comeData:any;

    @Output() public childEvent=new EventEmitter();

    public name="SoliCode";
    public messagess='developpement mobile';

    public datas:any=[];

    public date=new Date();

    public errorMessage:any;

    sendtoparent(){
        this.childEvent.emit(this.datas);
    };

  constructor(private personneService:PersonneService) {};

  public genders = ['Homme','Femme','Autre'];

  public check=true;

  public data="";

  public user={
      email:'',
      password:'',
  };

  public color='';

  rem=()=>{
      console.log('hello');
  }

  ngOnInit(): void {

    this.personneService.getPersonnes().subscribe(d => this.datas = d,
        error =>{
            console.error(error);
            this.errorMessage = error;
        });

    // fetch('https://jsonplaceholder.typicode.com/todos/3',{
    //     headers:{'content-type':'json'},
    //     body:'',
    //     method:''
    // })
    // .then(response => response.json())
    // .then(json => console.log(json.title));
    
  };

  fillPass(value:any){
      this.user.password=value;
  };

  fillEmail(value:any){
    this.user.email=value;
  };

  login(){
    //   if(this.user.password && this.user.email){
    //     this.data="";
    //     this.data=JSON.stringify(this.user);
    //   }else{
    //     this.data="";
    //alert('hello')
    //   }
  };

  checkeding(){
      let ch:any=!this.check;
      this.check=ch;
  };

  handleChanging(value:any){
      console.log(value);
  };

}
