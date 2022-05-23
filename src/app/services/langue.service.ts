import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Ilangue } from "../interfaces/Langue";
import { Observable,catchError,throwError } from "rxjs";
import {map} from 'rxjs/operators';

@Injectable({providedIn : 'root'})
export class LangueService{

    public url="http://localhost:3002/Langues";

    constructor(private httpClient:HttpClient){}

    getAllLangues():Observable<Ilangue[]>{
        return this.httpClient.get<Ilangue[]>(this.url).pipe(
            map(d => { return d; } ),
            catchError(err => throwError('server error !') )
        );
    };

}