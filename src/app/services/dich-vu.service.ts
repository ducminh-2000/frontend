import { Injectable } from '@angular/core';
import { DichVu } from '../model/DichVu';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DichVuService {

  private baseUrl = "http://localhost:8088/dichvu";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}`);
  }

  getPage(index: number): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/index=${index}`);
  }

  getPageInToaNha(index: number,id:number): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/toanha=${id}/index=${index}`);
  }

  getAllInToaNha(id:number): Observable<DichVu[]>{
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/toanha=${id}`);
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
    return this.httpClient.get<DichVu[]>(`${this.baseUrl}/search=${key}`);
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
