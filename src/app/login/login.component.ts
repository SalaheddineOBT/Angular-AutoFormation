import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { LogenService } from '../services/login.service';
import { PersonneService } from '../services/personne.service';
import { Router } from '@angular/router';

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

    public username='';

    public usersData:any=[];

    public datas:any=[];

    public date=new Date();

    public errorMessage:any;

    sendtoparent(){
        this.childEvent.emit(this.datas);
    };

  constructor(private personneService:PersonneService,private loginService:LogenService,private router:Router) {};

  public genders = ['Homme','Femme','Autre'];

  public check=true;

  public data="";

  public object=new Map();

  fillData(key:any,value:any){
      this.object.set(key,value);
  };  

  public color='';

  rem=()=>{
      console.log('hello');
  }

  listing(){
      let v=false;
      if(this.object.get('email') && this.object.get('password')){
        this.usersData.map((element:any) => {
            // console.log(element.email,this.email);
            if(element.email === this.object.get('email') && element.password === this.object.get('password')){
                v=true;
                this.username=element.username;
            }
          });

          if(v===false){ console.log('incorrect email || password !'); }
          else{
              console.log('Success!');
            //   this.router.navigate([
            //       '/home',
            //       {
            //         username:this.username
            //       }
            //   ]);
            this.router.navigate(['/home',this.username,'Home.php']);

          }

      }else console.log('Fill All Required Field !');
  };

  ngOnInit(): void {

    this.personneService.getPersonnes().subscribe(d => this.datas = d,
        error =>{
            console.error(error);
            this.errorMessage = error;
        });

        this.loginService.login().subscribe(d => this.usersData = d, error => console.log(error.message) );

    // fetch('https://jsonplaceholder.typicode.com/todos/3',{
    //     headers:{'content-type':'json'},
    //     body:'',
    //     method:''
    // })
    // .then(response => response.json())
    // .then(json => console.log(json.title));
    
  };

  login(){
    //   if(this.user.password && this.user.email){
    //     this.data="";
    //     this.data=JSON.stringify(this.user);
    //   }else{
    //     this.data="";
    //alert('hello')
    //   }
    this.listing()
  };

  checkeding(){
      let ch:any=!this.check;
      this.check=ch;
  };

  handleChanging(value:any){
      console.log(value);
  };

}
