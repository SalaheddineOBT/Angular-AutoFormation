import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';

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

    fillData(key:any,value:any){
        this.object.set(key,value);
    };

    register=()=>{

        // for (let [key, value] of this.object) {
        //     console.log(key + ' : ' + value);
        // }

        const res=Object.fromEntries(this.object); //Change Map Data to Json Format
        //console.log(res);

        // if(Object.keys(res).length===0){

        // }

        console.log(Object.keys(this.object).length);
        console.log(Object.keys(res).length===4 ? 'success !' : Object.keys(res).length);

    }

  constructor() { };

  ngOnInit(): void { };

}
