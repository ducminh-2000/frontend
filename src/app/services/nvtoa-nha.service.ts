import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NVToaNha } from '../model/NVToaNha';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NVToaNhaService {


  private baseUrl = "http://localhost:8088/nvtoanha";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<NVToaNha[]>{
    return this.httpClient.get<NVToaNha[]>(`${this.baseUrl}`);
  }

  create(NVToaNha: NVToaNha): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,NVToaNha);
  }

  getById(id: Number): Observable<NVToaNha>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, NVToaNha: NVToaNha): Observable<NVToaNha>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, NVToaNha);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
