import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Industry from '../model/Industry';

@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  private baseUrl = "http://localhost:5000/industry";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Industry[]>{
    return this.httpClient.get<Industry[]>(`${this.baseUrl}`);
  }

  getPage(index: number): Observable<Industry[]>{
    return this.httpClient.get<Industry[]>(`${this.baseUrl}/index=${index}`);
  }

  getById(id: Number): Observable<Industry>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, Industry: Industry): Observable<Industry>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, Industry);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  search(key: String): Observable<Industry[]>{
    return this.httpClient.get<Industry[]>(`${this.baseUrl}/search=${key}`);
  }
}
