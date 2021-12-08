import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CongTy } from '../model/CongTy';

@Injectable({
  providedIn: 'root'
})
export class CongTyService {

  private baseUrl = "http://localhost:8088/congty";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<CongTy[]>{
    return this.httpClient.get<CongTy[]>(`${this.baseUrl}`);
  }

  create(congTy: CongTy): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,congTy);
  }

  getById(id: Number): Observable<CongTy>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, congTy: CongTy): Observable<CongTy>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, congTy);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  search(key: String): Observable<CongTy[]>{
    return this.httpClient.get<CongTy[]>(`${this.baseUrl}/query/search=${key}`);
  }

  filterInRange(start: Number, end: Number): Observable<CongTy[]>{
    return this.httpClient.get<CongTy[]>(`${this.baseUrl}/filter/start=${start}&&end=${end}`);
  }

  filterLessThan(start: Number): Observable<CongTy[]>{
    return this.httpClient.get<CongTy[]>(`${this.baseUrl}/filter/less=${start}`);
  }

  filterGreaterThan(end: Number): Observable<CongTy[]>{
    return this.httpClient.get<CongTy[]>(`${this.baseUrl}/filter/greater=${end}`);
  }
}
