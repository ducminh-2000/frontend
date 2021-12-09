import { ToaNha } from './../../model/ToaNha';
import { ToaNhaService } from '../../services/toa-nha.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toanha',
  templateUrl: './toanha.component.html',
  styleUrls: ['./toanha.component.scss']
})
export class ToanhaComponent implements OnInit {

  listCongTy: ToaNha[] = [];
  listNotPaging: ToaNha[] = [];
  indexPagination: number = 1;
  totalPagination: number;

  constructor(private service: ToaNhaService, private router: Router) { }

  ngOnInit(): void {
    this.getToaNha();
  }

  private getToaNha(){
    this.service.getPage(0).subscribe((data) => {
      this.listCongTy = data;
    })
    this.service.getAll().subscribe((data) => {
      this.listNotPaging = data;
      if(this.listNotPaging.length % 10 != 0){
        this.totalPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
      }
    })
  }

  update(id: Number){
    this.router.navigate(['/toanha/update',id]);
  }

  create(){
    this.router.navigate(['/toanha/create']);
  }

  handleDelete(id: Number){
    if(confirm("Bạn chắc chắn muốn xóa ?")){
      this.service.delete(id).subscribe((data) => {
        console.log(data);
        alert("Thành công");
        this.ngOnInit();
      }, error => {
        console.log(error);
        alert("Có lỗi xảy ra, mã lỗi " + error.status);
      })
    }
  }

  search(key: String){
    this.service.search(key).subscribe((data) => {
      this.listCongTy = [];
      this.listCongTy = data;
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
      this.listCongTy = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10).subscribe((data) => {
      this.listCongTy = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listCongTy = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
        this.listCongTy = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }
}
