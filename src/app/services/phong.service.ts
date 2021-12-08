import { Injectable } from '@angular/core';
import { Phong } from '../model/Phong';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhongService {


  private baseUrl = "http://localhost:8088/Phong";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Phong[]>{
    return this.httpClient.get<Phong[]>(`${this.baseUrl}`);
  }

  create(Phong: Phong): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,Phong);
  }

  getById(id: Number): Observable<Phong>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, Phong: Phong): Observable<Phong>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, Phong);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  search(key: String): Observable<Phong[]>{
    return this.httpClient.get<Phong[]>(`${this.baseUrl}/search=${key}`);
  }

  filterInRange(start: Number, end: Number): Observable<Phong[]>{
    return this.httpClient.get<Phong[]>(`${this.baseUrl}/filter/less=${start}&&greater=${end}`);
  }

  filterLessThan(start: Number): Observable<Phong[]>{
    return this.httpClient.get<Phong[]>(`${this.baseUrl}/filter/less=${start}`);
  }

  filterGreaterThan(end: Number): Observable<Phong[]>{
    return this.httpClient.get<Phong[]>(`${this.baseUrl}/filter/greater=${end}`);
  }
}
