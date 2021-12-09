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

  getPage(index: number): Observable<NVToaNha[]>{
    return this.httpClient.get<NVToaNha[]>(`${this.baseUrl}/index=${index}`);
  }

  getPageInToaNha(index: number,id:number): Observable<NVToaNha[]>{
    return this.httpClient.get<NVToaNha[]>(`${this.baseUrl}/toanha=${id}/index=${index}`);
  }

  getAllInToaNha(id:number): Observable<NVToaNha[]>{
    return this.httpClient.get<NVToaNha[]>(`${this.baseUrl}/toanha=${id}`);
  }

  create(nvToaNha: NVToaNha): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,nvToaNha);
  }

  getById(id: Number): Observable<NVToaNha>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, NVToaNha: NVToaNha): Observable<NVToaNha>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, NVToaNha);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  search(key: String): Observable<NVToaNha[]>{
    return this.httpClient.get<NVToaNha[]>(`${this.baseUrl}/search=${key}`);
  }
}
