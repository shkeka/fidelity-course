import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOption;

  constructor(private http:HttpClient) { }

  getuserImages():Observable<object>{
    return this.http.get("http://localhost:8889/open-api/ufiles");
  }

  storeUser(obj):Observable<object>{

    this.httpOption={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post("http://localhost:8889/open-api/register",obj,this.httpOption);
  }
}
