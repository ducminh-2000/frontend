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
  constructor(private route: ActivatedRoute, private router: Router) {}
  namHoaVon: number = 1;
  listStock: Stock[] = [];
  listIndustry: Industry[] = [];
  stock: Stock = new Stock();

  ngOnInit(): void {
    this.getIndustry();
  }

  getIndustry() {}

  getStock(id: number) {}
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
