import { Injectable } from '@angular/core';
import { DichVu } from '../model/DichVu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DichVuService {

  private baseUrl = "http://localhost:8088/DichVu";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}`);
  }

  create(dichVu: DichVu): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, dichVu);
  }

  getById(id: Number): Observable<DichVu>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, dichVu: DichVu): Observable<DichVu>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, dichVu);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  search(key: String): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/query/search=${key}`);
  }

  filterInRange(start: Number, end: Number): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/filter/start=${start}&&end=${end}`);
  }

  filterLessThan(start: Number): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/filter/less=${start}`);
  }

  filterGreaterThan(end: Number): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/filter/greater=${end}`);
  }

}
