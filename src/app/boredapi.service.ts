import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoredapiService {


  //API Url
  private baseUrl="https://www.boredapi.com/api";

  constructor(private http:HttpClient) { }
public get():Observable<any>{
  return this.http.get<any>(this.baseUrl+"/activity");
}

}
