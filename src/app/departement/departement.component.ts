import { Component, OnInit } from '@angular/core';
import { DepartementService } from '../services/departement.service';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

    public data:any='';

  constructor(private departementService:DepartementService) { }

  ngOnInit(): void {
    this.departementService.getAllDepartements().subscribe(
        d => this.data = d,
        err => console.error(err.message)
    );
  }

}
