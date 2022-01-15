import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import Industry from "../../model/Industry";
import Stock from "../../model/Stock";

@Component({
  selector: "app-advise",
  templateUrl: "./advise.component.html",
  styleUrls: ["./advise.component.scss"],
})
export class AdviseComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}
  namHoaVon: number = 1;
  listStock: Stock[] = [];
  listIndustry: Industry[] = [];
  listStockChange: Stock[] = [];
  stock: Stock = new Stock();

  ngOnInit(): void {
    this.getIndustry();
    this.getStock();
  }

  getIndustry() {
    this.http.get("http://localhost:5000/industry").subscribe((data: any) => {
      console.log(data);
      this.listIndustry = data;
    });
  }

  getStock() {
    this.http.get("http://localhost:5000/stock").subscribe((data: any) => {
      this.listStock = data;
    });
  }

  onchangeIndustry(id: number){
    this.listStockChange = this.listStock.filter((item) => {
      return item.industryId === id;
    })
    console.log(this.listStockChange)
  }

  onSubmit() {
    // this.stockService.checkStock(this.stock).subscribe((data) => {
    //   alert("Thêm thành công bản ghi");
    // }, error => {
    //   alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    // })
  }
  back() {
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(["/toanha/dichvu"]);
  }
}
