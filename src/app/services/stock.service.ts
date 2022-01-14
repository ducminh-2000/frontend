import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Stock from '../model/Stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private baseUrl = "http://localhost:5000/stock";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseUrl}`);
  }

  getPage(index: number): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseUrl}/index=${index}`);
  }

  getByIndustry(id: number): Observable<Stock[]> {
    return this.httpClient.get<Stock[]>(`${this.baseUrl}/industryId=${id}`);
  }

  getById(id: Number): Observable<Object>{
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }

  update(id: Number, Stock: Stock): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${id}`, Stock);
  }

  delete(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  search(key: String): Observable<Stock[]>{
    return this.httpClient.get<Stock[]>(`${this.baseUrl}/search=${key}`);
  }

  checkStock(stock: Stock): Observable<any> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`)
  }
}
