import { Component, OnInit } from '@angular/core';
import { LangueService } from 'src/app/services/langue.service';

@Component({
  selector: 'app-department-contact',
  template: `
    <h1>Contact Form</h1>
    <form class="cf" #userForm="ngForm">
        <div class="input-group">
            <input ngModel required type="text" name="fullName" autocomplete="off" class="input">
            <label class="user-label">Full Name</label>
        </div>
        <div class="input-group">
            <input ngModel required type="text" name="email" class="input" autocomplete="off">
            <label class="user-label">Email</label>
        </div>
        <div class="input-group"> 
            <input ngModel required type="tel" name="phoneNumber" class="input" autocomplete="off">
            <label class="user-label">Phone Number</label>
        </div>

        <div ngModelGroup="adresse">
            <div class="input-group"> 
                <input ngModel required type="text" name="street" class="input" autocomplete="off">
                <label class="user-label">Street</label>
            </div>
            <div class="input-group"> 
                <input ngModel required type="text" name="city" class="input" autocomplete="off">
                <label class="user-label">City</label>
            </div>
            <div class="input-group"> 
                <input ngModel required type="text" name="state" class="input" autocomplete="off">
                <label class="user-label">State</label>
            </div>
            <div class="input-group"> 
                <input ngModel required type="text" name="poatalCode" class="input" autocomplete="off">
                <label class="user-label">Postal Code</label>
            </div>   
        </div>

        <div class="input-group">
            <select ngModel #val class="input" name="interestingIn" (change)="alerting(val.value)">
                <option></option>
                <option *ngFor="let topic of topics">{{topic.langue}}</option>
            </select>
            <label [class.user-label]="true" [class.top]="noNull">I'am Interesting In</label>
        </div>
        <div class="input-group">
            <textarea ngModel required rows="10" name="message" class="input1"></textarea>
            <label class="user-label" >Message</label>
        </div>
        <button type="submit">
            <div class="svg-wrapper-1">
                <div class="svg-wrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                </div>
            </div>
            <span>Send</span>
        </button>
        
    {{userForm.value | json}}
    </form>
    <div class="space"></div>
  `,
  styleUrls:["./department-contact.component.css"]
})
export class DepartmentContactComponent implements OnInit {

    public topics:any=[];
    public noNull=false;

    alerting = (v:any) => {
        //alert(v);
        v === "" ? this.noNull=false : this.noNull=true;
    };

  constructor(private langueService:LangueService) { };

  ngOnInit(): void {
    this.langueService.getAllLangues().subscribe(d => this.topics = d);
  };

}
