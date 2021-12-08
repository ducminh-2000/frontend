import { Injectable } from '@angular/core';
import { NVCongTy } from '../model/NVCongTy';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NVNVCongTyService {

  private baseUrl = "http://localhost:8088/nvcongty";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<NVCongTy[]>{
    return this.httpClient.get<NVCongTy[]>(`${this.baseUrl}`);
  }

  create(NVCongTy: NVCongTy): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,NVCongTy);
  }

  getById(id: Number): Observable<NVCongTy>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, NVCongTy: NVCongTy): Observable<NVCongTy>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, NVCongTy);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
}
