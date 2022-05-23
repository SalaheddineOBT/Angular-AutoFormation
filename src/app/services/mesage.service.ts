import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../classes/User";


@Injectable({
    providedIn:'root'
})
export class MessageService{
    private url="http://localhost:3000/enroll";

    constructor(private httpClient:HttpClient){};

    PostData(user:User){
        return this.httpClient.post<any>(this.url,user);
    };
}
