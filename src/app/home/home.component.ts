import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,private routAct:ActivatedRoute) { };
  
  @Input()
  public username:any='';

  ngOnInit(): void {
    let usernm=this.routAct.snapshot.paramMap.get('username');
    let id=this.routAct.snapshot.paramMap.get('id');
    console.log(usernm,id);
    usernm ? this.username=this.routAct.snapshot.paramMap.get('username') : this.router.navigate(['/login']);
  };

  public name="Salaheddine";
  public myId='testid'
  public isdisabled=false;
  public successClass='success';
  public dangerClass='danger';
  public italicClass='italicFont';
  public normalClass='normalFont';

  public messageClasses={
      'text-success':this.successClass,
      'text-error':this.dangerClass
  };

  public hasErr=true;

  changetoable(){
      let toogle:any=this.isdisabled
      this.isdisabled=!toogle;
  };

  getUser(){
      return 'Hello '+this.name;
  };

  tooggll(event:any){
    console.log(event.type);
    let toogle:any=this.hasErr
    this.hasErr=!toogle;
  };

  watch(val:any){
      console.log(val);
  };

  genders=['Homme','Femme','Autre'];

  navigateToDepart = () => this.router.navigate(['/departement']);

}