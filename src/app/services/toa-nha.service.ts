import { ToaNha } from './../model/ToaNha';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToaNhaService {

  private baseUrl = "http://localhost:8088/toanha";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ToaNha[]>{
    return this.httpClient.get<ToaNha[]>(`${this.baseUrl}`);
  }

  getPage(index: number): Observable<ToaNha[]>{
    return this.httpClient.get<ToaNha[]>(`${this.baseUrl}/index=${index}`);
  }

  getByPhongBan(id: number): Observable<ToaNha[]>{
    return this.httpClient.get<ToaNha[]>(`${this.baseUrl}/phongban=${id}`);
  }
  create(ToaNha: ToaNha): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,ToaNha);
  }

  getById(id: Number): Observable<ToaNha>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, ToaNha: ToaNha): Observable<ToaNha>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, ToaNha);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  search(key: String): Observable<ToaNha[]>{
    return this.httpClient.get<ToaNha[]>(`${this.baseUrl}/query/search=${key}`);
  }

}
