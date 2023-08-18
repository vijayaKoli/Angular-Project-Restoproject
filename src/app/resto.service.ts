import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestoService {
  
  private url = "http://localhost:3000/restaurants";
  rootUrl="http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getList(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  saveResto(data: any): Observable<any> {
    return this.http.post<any>(this.url, data);
  }

  deleteResto(id: any): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  getCurrentResto(id: any): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  updateResto(id: any, data: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, data);
  }
  registerUser(data: any)
  {
    return this.http.post(this.rootUrl+"users",data)
  }
}
