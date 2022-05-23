import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { forbiddenNameValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    get userName(){ return this.registrationForm.get('username'); }
    get email(){ return this.registrationForm.get('email'); }
    get password(){ return this.registrationForm.get('password'); }
    get confirm(){ return this.registrationForm.get('confirm'); }
    get street(){ return this.registrationForm.get('street'); }
    get city(){ return this.registrationForm.get('city'); }
    get postal(){ return this.registrationForm.get('postal'); }

    registrationForm1 = new FormGroup({
       username: new FormControl(''), 
       email: new FormControl(''), 
       password: new FormControl(''), 
       confirm: new FormControl(''),
       adresse:new FormGroup({
        street: new FormControl(''), 
        city: new FormControl(''), 
        postal: new FormControl('')
       })
    });

    ngOnInit(): void {
        
    }

    registrationForm=this.fb.group({
        username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
        email:['',Validators.required,],
        password:['',Validators.required,],
        confirm:['',Validators.required,],
        adresse:this.fb.group({
            street:['',Validators.required,],
            city:['',Validators.required,],
            postal:['',Validators.required,],
        })
    })

    constructor(private fb:FormBuilder){}

    loading(){
        // this.registrationForm.setValue({
        //     username:"salaheddine",
        //     email:"salah@gmail.com",
        //     password:"#@$#@$$$$$$$$$^%%&",
        //     confirm:"#@$#@$$$$$$$$$^%%&",
        //     adresse:{
        //         street:"Clifornia",
        //         city:"Tangier",
        //         postal:"9600",
        //     }
        // });

        this.registrationForm1.patchValue({
            username:"salaheddine",
            email:"salah@gmail.com",
            password:"#@$#@$$$$$$$$$^%%&",
            confirm:"#@$#@$$$$$$$$$^%%&"
        });

    }

  public title = 'myapp';

  handleChange(data:any){
    this.title=data;
  };

  handleClick(){
    alert(this.title);
  };

  alertHello(){
    alert(this.title);
    this.title=this.car.draw();
    alert(this.title);
  };

  public data:any='';

  public car=new Car(10,20);

}

class Engine{

    constructor(public x:number,public y:number){
        this.x=x;
        this.y=y;
    }

    draw=()=>{
        return this.x + this.y;
    }
} 

class Tires{
    constructor(){}
}

class Personne{

    constructor(public username:any,public email:any,public password:any){
        this.username=username ? username : this.errors('UserName is Required !');
        this.email=email ? email : this.errors('UserName is Required !');;
        this.password=password ? password : this.errors('UserName is Required !');;
    }

    formValidate=()=>{
        
    }

    errors(message:any){
        return ''+message;
    }

}
class Car{
    public engine:Engine;
    public tires:Tires;

    constructor(public x:number,public y:number){
        this.engine=new Engine(x,y);
        this.tires=new Tires();
    }

    draw():string{
        return ""+this.engine.draw();
    }
} 
