import { Injectable } from '@angular/core';
import { PhongBan } from '../model/PhongBan';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhongBanService {


  private baseUrl = "http://localhost:8088/phongban";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}`);
  }

  getByToaNha(id:number): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}/toanha=${id}`)
  }

  create(PhongBan: PhongBan): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,PhongBan);
  }

  getById(id: Number): Observable<PhongBan>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, PhongBan: PhongBan): Observable<PhongBan>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, PhongBan);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
