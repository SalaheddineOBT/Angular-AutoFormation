import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-contact',
  template: `
    <h1>Contact Form</h1>
    <form class="cf">
        <div class="input-group">
            <input required type="text" autocomplete="off" class="input">
            <label class="user-label">Full Name</label>
        </div>
        <div class="input-group">
            <input required type="text" class="input" autocomplete="off">
            <label class="user-label">Email</label>
        </div>
        <div class="input-group">
            <input required type="text" class="input" autocomplete="off">
            <label class="user-label">Phone Number</label>
        </div>
        <div class="input-group">
            <textarea required rows="10" class="input1"></textarea>
            <label class="user-label">Message</label>
        </div>
        <button>
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
    </form>
    <div class="space"></div>
  `,
  styleUrls:["./department-contact.component.css"]
})
export class DepartmentContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
