import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    registrationForm = new FormGroup({
       username: new FormControl(''), 
       email: new FormControl(''), 
       password: new FormControl(''), 
       confirm: new FormControl('')
    });

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
