import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import Stock from "../../model/Stock";

@Component({
  selector: "app-stock",
  templateUrl: "./stock.component.html",
  styleUrls: ["./stock.component.scss"],
})
export class StockComponent implements OnInit {
  listStock: Stock[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getStock();
  }

  getStock() {
    this.http.get("http://localhost:5000/stock").subscribe((data: any) => {
      console.log(data);
      this.listStock = data;
    });
  }
}
