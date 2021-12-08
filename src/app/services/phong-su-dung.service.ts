import { Injectable } from '@angular/core';
import { PhongSuDung } from '../model/PhongSuDung';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhongSuDungService {


  private baseUrl = "http://localhost:8088/PhongSuDung";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PhongSuDung[]>{
    return this.httpClient.get<PhongSuDung[]>(`${this.baseUrl}`);
  }

  create(PhongSuDung: PhongSuDung): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,PhongSuDung);
  }

  getById(id: Number): Observable<PhongSuDung>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, PhongSuDung: PhongSuDung): Observable<PhongSuDung>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, PhongSuDung);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
