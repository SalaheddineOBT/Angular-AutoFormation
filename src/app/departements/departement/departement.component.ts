import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../../services/departement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})

export class DepartementComponent implements OnInit {

  public data:any='';

  constructor(private departementService:DepartementService,private router:Router) { }

  ngOnInit(): void {
    this.departementService.getAllDepartements().subscribe(
        d => this.data = d,
        err => console.error(err.message)
    );
  }

  naviateToDetails(id:any){
    this.router.navigate(['/',id]);
  };
  
}