import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/User';
import { LangueService } from 'src/app/services/langue.service';
import { MessageService } from 'src/app/services/mesage.service';

@Component({
  selector: 'app-department-contact',
  template: `
    <h1>Contact Form</h1>
    <div *ngIf="errorMsg">
        {{errorMsg}}
    </div>
    <form class="cf" #userForm="ngForm">
        <div class="input-group">
            <input [(ngModel)]="userModel.fullName" [class.inputInValide]="fullname.invalid && fullname.touched" required #fullname="ngModel" type="text" name="fullName" autocomplete="off" class="input">
            <label class="user-label">Full Name</label>
            <small [style.color]='"red"' [class.d-none]='fullname.valid || fullname.untouched'>Name is Required !</small>
        </div>
        <div class="input-group">
            <input [(ngModel)]="userModel.email" type="text" [class.inputInValide]="email.invalid && email.touched" #email="ngModel" required name="email" class="input" autocomplete="off">
            <label class="user-label">Email</label>
            <small [style.color]='"red"' [class.d-none]='email.valid || email.untouched'>Email is Required !</small>
        </div>
        <div class="input-group"> 
            <input [(ngModel)]="userModel.phoneNumber" required [class.inputInValide]="phone.invalid && phone.touched" #phone="ngModel" type="tel" name="phoneNumber" pattern="^[0-9]{10}$" class="input" autocomplete="off">
            <label class="user-label">Phone Number</label>
            <div *ngIf="phone.errors && (phone.valid || phone.touched)">
                <small  [style.color]='"red"' *ngIf="phone.errors?.['required']">Phone Number is Required !</small>
                <small  [style.color]='"red"' *ngIf="phone.errors?.['pattern']">Phone Number must be 10 digit !</small>
            </div>
        </div>
        <div ngModelGroup="adresse">
            <div class="input-group"> 
                <input [(ngModel)]="userModel.street" required type="text" [class.inputInValide]="street.invalid && street.touched" #street="ngModel" name="street" class="input" autocomplete="off">
                <label class="user-label">Street</label>
                <small [style.color]='"red"' [class.d-none]='street.valid || street.untouched'>Street is Required !</small>
            </div>
            <div class="input-group"> 
                <input [(ngModel)]="userModel.city" required type="text" name="city" [class.inputInValide]="city.invalid && city.touched" #city="ngModel" class="input" autocomplete="off">
                <label class="user-label">City</label>
                <small [style.color]='"red"' [class.d-none]='city.valid || city.untouched'>City is Required !</small>
            </div>
            <div class="input-group"> 
                <input [(ngModel)]="userModel.state" required type="text" name="state" [class.inputInValide]="state.invalid && state.touched" #state="ngModel" class="input" autocomplete="off">
                <label class="user-label">State</label>
                <small [style.color]='"red"' [class.d-none]='state.valid || state.untouched'>State is Required !</small>
            </div>
            <div class="input-group"> 
                <input [(ngModel)]="userModel.postalCode" required [class.inputInValide]="postal.invalid && postal.touched" #postal="ngModel" type="text" name="poatalCode" class="input" autocomplete="off">
                <label class="user-label">Postal Code</label>
                <small [style.color]='"red"' [class.d-none]='postal.valid || postal.untouched'>Postal Code is Required !</small>
            </div>   
        </div>
        <div class="input-group">
            <select [(ngModel)]="userModel.interstingIn" #val required class="input" [class.inputInValide]="interst.invalid && interst.touched" #interst="ngModel" name="interestingIn" (change)="alerting(val.value)">
                <option></option>
                <option *ngFor="let topic of topics">{{topic.langue}}</option>
            </select>
            <label [class.user-label]="true" [class.top]="noNull">I'am Interesting In</label>
            <small [style.color]='"red"' [class.d-none]='interst.valid ||interst.untouched'>Select Your Interesting !</small>
        </div>
        <div class="input-group">
            <textarea [(ngModel)]="userModel.message" required rows="10" [class.inputInValide]="messagee.invalid && messagee.touched" #messagee="ngModel" name="message" class="input"></textarea>
            <label class="user-label" >Message</label>
            <small [style.color]='"red"' [class.d-none]='messagee.valid || messagee.untouched'>Message is Required !</small>
        </div>
        <div class="chbx">
            <label class="cont">
                <input type="checkbox" [checked]="check">
                <span></span>
            </label>
            <span class="text" (click)="checkeding()">Accept The Conditionals ?</span>
        </div>
        <button type="button" (click)="userForm.form.valid ? submit() : null">
            <div  class="svg-wrapper-1">
                <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                </div>
            </div>
            <span>Send</span>
        </button>
    {{userForm.form.valid}}
    {{userForm.value | json}}
    <hr />
    {{userModel | json}}
    </form>
    <div class="space"></div>
  `,
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

  submit=()=>{
      //console.log(this.userModel)
      this.messageService.PostData(this.userModel).subscribe(d => console.log(d),e=> this.errorMsg=e.statusText);
  }
}
