import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-contact',
  template: `
    <h1>Contact Form</h1>
    <form class="cf">
    <div class="half left cf">
        <input type="text" placeholder="Name">
        <input type="email" placeholder="Email address">
        <input type="text" placeholder="Subject">
    </div>
    <div class="half right cf">
        <textarea name="message" type="text" placeholder="Message"></textarea>
    </div>  
    <input type="submit" value="Submit">
    </form>
  `,
  styleUrls:["./department-contact.component.css"]
})
export class DepartmentContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
