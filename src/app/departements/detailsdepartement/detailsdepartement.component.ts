import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router,ParamMap } from '@angular/router';

@Component({
  selector: 'app-detailsdepartement',
  templateUrl: './detailsdepartement.component.html',
  styleUrls: ['./detailsdepartement.component.css']
})
export class DetailsdepartementComponent implements OnInit {

  constructor(private routerAct:ActivatedRoute,private router:Router) { };

  private id:any=null;

  public departement:any = {};

  ngOnInit(): void {
      this.id=this.routerAct.snapshot.paramMap.get('id');
      this.routerAct.paramMap.subscribe((params : ParamMap) => this.id = params.get('id') );

      this.fillDta(this.id);
  };

  fillDta = async (id:any) => {
    await fetch('http://localhost:3002/departements/'+id)
    .then(res => res.json())
    .then(d => this.departement=d)
    .catch(e => console.log(e));
  };

  goPrev=()=>{
    let prevId=parseInt(this.id) - 10;
    this.router.navigate(['/detailDepartement',prevId]);
    this.ngOnInit()
  };

  goNext=()=>{
    let nextId=parseInt(this.id) + 10;
    this.router.navigate(['/detailDepartement',nextId]);
    this.ngOnInit()
  };

  goBack=() => {
      let selectedId=this.id ? this.id : null;
      this.router.navigate(['/departement', { id:selectedId } ]);
  };

}