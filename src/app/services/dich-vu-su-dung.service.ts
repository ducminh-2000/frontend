import { DichVuSuDung } from '../model/DichVuSuDung';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DichVuSuDungService {

  private baseUrl = "http://localhost:8088/dichvusudung";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<DichVuSuDung[]>{
    return this.httpClient.get<DichVuSuDung[]>(`${this.baseUrl}`);
  }

  create(dichVuSuDung: DichVuSuDung): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, dichVuSuDung);
  }

  getById(id: Number): Observable<DichVuSuDung>{
    return this.httpClient.get<DichVuSuDung>(`${this.baseUrl}/${id}`);
  }

  update(id: Number, dichVuSuDung: DichVuSuDung): Observable<DichVuSuDung>{
    return this.httpClient.put<DichVuSuDung>(`${this.baseUrl}/${id}`, dichVuSuDung);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
