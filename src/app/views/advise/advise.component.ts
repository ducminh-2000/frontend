import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-advise",
  templateUrl: "./advise.component.html",
  styleUrls: ["./advise.component.scss"],
})
export class AdviseComponent implements OnInit {
  constructor(private http: HttpClient) {}
  pe: number = 1;
  listStock = [];
  rawListStock = [];
  listIndustry = [];
  stock: any;
  industryId: any;

  ngOnInit(): void {
    this.getIndustry();
    this.getStock();
  }

  getIndustry() {
    this.http.get("http://localhost:5000/industry").subscribe((data: any) => {
      this.listIndustry = data;
    });
  }

  getStock() {
    this.http.get("http://localhost:5000/stock").subscribe((data: any) => {
      this.rawListStock = data;
    });
  }

  onChangeIndustry(id: number) {
    this.listStock = this.rawListStock.filter((item) => item.industryId == id);
    console.log(this.listStock);
  }

  onSubmit() {
    console.log(this.stock, this.industryId);

    if (this.stock && this.stock.id) {
      this.http
        .post("http://localhost:5000/stock/checkStock", {
          stockCode: this.stock.mack,
          pe: this.pe,
        })
        .subscribe((data: any) => {
          alert(data.message);
        });
    } else {
      this.http
        .post("http://localhost:5000/stock/checkListStock", {
          industryId: this.industryId,
          pe: this.pe,
        })
        .subscribe((data: any[]) => {
          if (data && data.length == 0) {
            alert("Không nên đầu tư ngành này trong khoảng thời gian này !");
          } else {
            let res = "";
            for (let item of data) {
              res += item.stockCode + ", ";
            }
            alert(`Các mã nên đầu tư là: ${res}`);
          }
        });
    }
  }
}
