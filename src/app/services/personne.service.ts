import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPersonne } from "../interfaces/personne";
import { catchError,of,throwError,tap, Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable()
export class PersonneService{

    private url:string='https://jsonplaceholder.typicode.com/todos';

    constructor(private httpClient: HttpClient){}

    getPersonnes():Observable<IPersonne[]>{
        return this.httpClient.get<IPersonne[]>(this.url).pipe(
            map(data=>{
                return data;
            }),
            catchError(error => {
                return throwError(error.message || 'Something went wrong !');
            })
        )
    };

    

}