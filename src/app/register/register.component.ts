import { Component, OnInit } from '@angular/core';
import { LogenService } from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

    public object=new Map();

    public error={
        email:'',
        password:'',
        confirmPassword:'',
        fullName:''
    };

    public personne={
        username:'',
        email:'',
        password:'',
    };

    fillData(key:any,value:any){
        this.object.set(key,value);
    };

    register=()=>{

        // for (let [key, value] of this.object) {
        //     console.log(key + ' : ' + value);
        // }

        const res=Object.fromEntries(this.object); //Change Map Data to Json Format
        //console.log(res);

        this.personne.email=res.email;
        this.personne.username=res.fullName;
        this.personne.password=res.confirmPassword

        this.loginService.personne=this.personne;

        this.loginService.register().subscribe((data:any) => {
            console.log(data);
        });

        // if(Object.keys(res).length===0){

        // }

        // console.log(Object.keys(this.object).length);
        // console.log(Object.keys(res).length===4 ? 'success !' : Object.keys(res).length);

    }

  constructor(private loginService:LogenService) { };

  ngOnInit(): void { };

}
