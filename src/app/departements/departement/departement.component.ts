import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../services/departement.service';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})

export class DepartementComponent implements OnInit {

  public data:any='';

  public selectedId:any=null;

  constructor(private departementService:DepartementService,private router:Router,private routeAct:ActivatedRoute) { }

  ngOnInit(): void {
    this.departementService.getAllDepartements().subscribe(
        d => this.data = d,
        err => console.error(err.message)
    );

    //this.selectedId=this.routeAct.snapshot.paramMap.get('id');
    this.routeAct.paramMap.subscribe((params : ParamMap) => this.selectedId = params.get('id') );

  }

  naviateToDetails(id:any){
    // this.router.navigate(['/detailDepartement',id]);
    this.router.navigate([id],{relativeTo : this.routeAct})
  };

  isSelected = (id:any) => {
    return id == this.selectedId;
  }
  
}