import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators,FormArray } from '@angular/forms';
import { RegistrationService } from './services/registration.service';
import { PasswordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    get userName(){ return this.registrationForm.get('username'); }
    get email(){ return this.registrationForm.get('email'); }

    get alternateEmails(){ return this.registrationForm.get('alternateEmails') as FormArray; }

    get password(){ return this.registrationForm.get('password'); }
    get confirm(){ return this.registrationForm.get('confirm'); }
    get street(){ return this.registrationForm.get('street'); }
    get city(){ return this.registrationForm.get('city'); }
    get postal(){ return this.registrationForm.get('postal'); }

    public arr=new FormArray([
        new FormControl(),
        new FormControl(),
    ]);

    addAlternateEmail(){
        this.alternateEmails.push(this.fb.control(''));
        this.arr.setValue(['Nancy','Drew']);
        //console.log(this.arr.value);
    };

    onSubmit(){
        //console.log(this.registrationForm.value);
        this.registrationService.postData(this.registrationForm.value)
        .subscribe( res => console.log('Success ! ',res), err => console.log('Error ! ',err) );
    };

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

    registrationForm:any='';

    ngOnInit(): void {
        this.registrationForm=this.fb.group({
            username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
            email:['',Validators.required,],
            password:['',Validators.required],
            confirm:['',Validators.required,],
            adresse:this.fb.group({
                street:['',Validators.required,],
                city:['',Validators.required,],
                postal:['',Validators.required,],
            }),
            subscribe:[false],
            alternateEmails:this.fb.array([]),
        },{ validator : PasswordValidator });

        this.registrationForm.get('subscribe').valueChanges.subscribe((val : any) => {
            const email=this.email;
            val ? email.setValidators(Validators.required) : email.clearValidators();

            email.updateValueAndValidity();
        });
    }

    constructor(private fb:FormBuilder,private registrationService:RegistrationService){}

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
