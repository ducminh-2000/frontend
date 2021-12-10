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

  getPage(index: number): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}/index=${index}`);
  }

  getPageInToaNha(index: number,id:number): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}/toanha=${id}/index=${index}`);
  }

  getAllInToaNha(id:number): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}/toanha=${id}`);
  }
  getByToaNha(id:number): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}/toanha=${id}`)
  }

  search(key: String): Observable<PhongBan[]>{
    return this.httpClient.get<PhongBan[]>(`${this.baseUrl}/search=${key}`);
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
