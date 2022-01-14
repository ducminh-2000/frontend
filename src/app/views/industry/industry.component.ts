import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Industry from '../../model/Industry';
import { IndustryService } from '../../services/industry.service';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  listIndustry: Industry[] = [];
  listNotPaging: Industry[] = [];
  indexPagination: number = 1;
  totalPagination: number;

  constructor(private service: IndustryService, private router: Router) { }

  ngOnInit(): void {
    this.getStock();
  }

  private getStock(){
    this.service.getPage(0).subscribe((data) => {
      this.listIndustry = data;
    })
    this.service.getAll().subscribe((data) => {
      this.listNotPaging = data;
      if(this.listNotPaging.length % 10 != 0){
        this.totalPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
      }
    })
  }


  search(key: String){
    this.service.search(key).subscribe((data) => {
      this.listIndustry = [];
      this.listIndustry = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  gotoList(){
    this.router.navigate(['/toanha']);
  }

  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listIndustry = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10).subscribe((data) => {
      this.listIndustry = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listIndustry = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
        this.listIndustry = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

}
