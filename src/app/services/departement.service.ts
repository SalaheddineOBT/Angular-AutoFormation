import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable,catchError,throwError } from "rxjs";
import { IDepartement } from "../interfaces/Departement";


@Injectable()
export class DepartementService{

    private url='http://localhost:3002/departements';

    constructor(private httpClient:HttpClient){}

    getAllDepartements():Observable<IDepartement[]>{
        return this.httpClient.get<IDepartement[]>(this.url).pipe(
            map(d => { return d; } ),
            catchError(err => throwError(err.message || 'server error !') )
        );
    };

}