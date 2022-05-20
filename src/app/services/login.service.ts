import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable,catchError,throwError } from "rxjs";
import { IPersonne } from "../interfaces/personne";

@Injectable()
export class LogenService{

    public personne={
        username:'',
        email:'',
        password:'',
    }

    private url='http://localhost:3002/users';

    constructor(private httpClient:HttpClient){};

    login():Observable<IPersonne[]>{
        return this.httpClient.get<IPersonne[]>(this.url).pipe(
            map(data => { return data; }),
            catchError(error => throwError(error.message || 'Error in the Server !'))
        );
    };

    register():Observable<IPersonne>{
        return this.httpClient.post<IPersonne>(this.url,this.personne,{
            headers:new HttpHeaders({ 'Content-Type':'application/json' })
        }).pipe(
            catchError((error:any) => {
                return throwError(error.message);
            })
        );
    };

}