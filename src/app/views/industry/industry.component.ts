import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import Industry from "../../model/Industry";

@Component({
  selector: "app-industry",
  templateUrl: "./industry.component.html",
  styleUrls: ["./industry.component.scss"],
})
export class IndustryComponent implements OnInit {
  listIndustry: Industry[] = [];
  listNotPaging: Industry[] = [];
  indexPagination: number = 1;
  totalPagination: number;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getIndustry();
  }

  getIndustry() {
    this.http.get("http://localhost:5000/industry").subscribe((data: any) => {
      console.log(data);
      this.listIndustry = data;
    });
  }
}
