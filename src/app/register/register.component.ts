import { Component, OnInit } from '@angular/core';
import { LogenService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    public object=new Map();

    public res:any;

    public error={
        email:'',
        password:'',
        confirmPassword:'',
        fullName:''
    };

    public personne={
        username:'',
        email:'',
        password:''
    };

    public personned={
        username:'',
        email:'',
        password:'',
        confirm:''
    };

    fillData(key:any,value:any){
        this.object.set(key,value);
    };

    register=()=>{

        // for (let [key, value] of this.object) {
        //     console.log(key + ' : ' + value);
        // }

        this.res=Object.fromEntries(this.object); //Change Map Data to Json Format
        //console.log(res);

        // console.log(Object.keys(res).length)

        // if(Object.keys(res).length===0){
            
        // }

        // console.log(Object.keys(this.object).length);
        if(Object.keys(this.res).length !== 4){ 
            console.log('Fill All Required Fileds !') 
        }
        else{
            this.personned.email=this.res.email;
            this.personned.username=this.res.fullName;
            this.personned.password=this.res.password;
            this.personned.confirm=this.res.confirmPassword;

            if(this.personned.confirm === this.personned.password){
                this.personne.email=this.personned.email;
                this.personne.username=this.personned.username;
                this.personne.password=this.personned.confirm;

                this.loginService.personne=this.personne;

                this.loginService.register().subscribe((data:any) => {
                    console.log(data);

                    this.object=new Map();

                    this.personne={
                        username:'',
                        email:'',
                        password:''
                    };
                    this.personned={
                        username:'',
                        email:'',
                        password:'',
                        confirm:''
                    };
                });
            } else console.log('Confirm Password Incorrect !');

        }

    }

  constructor(private loginService:LogenService) { };

  ngOnInit(): void { };

}
