import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private API_URI = environment.API_URI;

  constructor(
    private http: HttpClient
  ) { }

  getRequest(path: String): Observable<any> {
    return this.http.get(`${this.API_URI}${path}`).pipe(map((data:any)=> data));
  }

  postRequest(path: String, object:any): Observable<any> {
    return this.http.post(`${this.API_URI}${path}`,object).pipe(map((data:any)=> data));
  }

  deleteRequest(path: String, id:number): Observable<any> {
    return this.http.delete(`${this.API_URI}${path}/${id}`).pipe(map((data:any)=> data));
  }
}
