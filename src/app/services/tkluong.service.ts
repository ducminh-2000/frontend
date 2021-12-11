import { TKLuong } from '../model/TKLuong';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TKLuongService {


  private baseUrl = "http://localhost:8088/thongke"

  constructor(private httpCLient: HttpClient) { }

  getAllLuongByToaNha(id: number, start: String, end: String): Observable<TKLuong[]> {
    return this.httpCLient.get<TKLuong[]>(`${this.baseUrl}/luong/${start}&&${end}&&toanha=${id}`)
  }
  getAllLuong(start: String, end: String): Observable<TKLuong[]>{
    return this.httpCLient.get<TKLuong[]>(`${this.baseUrl}/luong/${start}&&${end}`);
  }

  getLuongById(start: String, end:String, id:number, idToaNha: number): Observable<TKLuong>{
    return this.httpCLient.get(`${this.baseUrl}/luong/${id}/${start}&&${end}&&toanha=${idToaNha}`);
  }
}
