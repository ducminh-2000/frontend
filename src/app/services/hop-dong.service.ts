import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HopDong } from '../model/HopDong';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HopDongService {

  private baseUrl = "http://localhost:8088/hopdong";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<HopDong[]>{
    return this.httpClient.get<HopDong[]>(`${this.baseUrl}`);
  }

  create(hopDong: HopDong): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, hopDong);
  }

  getById(id: Number): Observable<HopDong>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, hopDong: HopDong): Observable<HopDong>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, hopDong);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
