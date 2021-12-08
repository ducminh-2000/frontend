import { Injectable } from '@angular/core';
import { GhiChu } from '../model/GhiChu';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GhiChuService {

  private baseUrl = "http://localhost:8088/ghichu";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<GhiChu[]>{
    return this.httpClient.get<GhiChu[]>(`${this.baseUrl}`);
  }

  create(ghiChu: GhiChu): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, ghiChu);
  }

  getById(id: Number): Observable<GhiChu>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, ghiChu: GhiChu): Observable<GhiChu>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, ghiChu);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
