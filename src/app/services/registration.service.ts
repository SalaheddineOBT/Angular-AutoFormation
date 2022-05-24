import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
    
    private url='http://localhost:3000/enroll';

    constructor(private httpClient:HttpClient) { };

    postData = (data:any) => { return this.httpClient.post<any>(this.url,data); };

}
