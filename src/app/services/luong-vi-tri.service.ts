import { Injectable } from '@angular/core';
import { LuongViTri } from '../model/LuongViTri';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LuongViTriService {

  private baseUrl = "http://localhost:8088/luongvitri";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<LuongViTri[]>{
    return this.httpClient.get<LuongViTri[]>(`${this.baseUrl}`);
  }

  create(LuongViTri: LuongViTri): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,LuongViTri);
  }

  getById(id: Number): Observable<LuongViTri>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, LuongViTri: LuongViTri): Observable<LuongViTri>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, LuongViTri);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }}
