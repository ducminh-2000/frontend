import { PhongBanService } from './../../../services/phong-ban.service';
import { PhongBan } from './../../../model/PhongBan';
import { Component, OnInit } from '@angular/core';
import { ToaNha } from '../../../model/ToaNha';
import { Router } from '@angular/router';
import { ToaNhaService } from '../../../services/toa-nha.service';

@Component({
  selector: 'app-phongban',
  templateUrl: './phongban.component.html',
  styleUrls: ['./phongban.component.scss']
})
export class PhongbanComponent implements OnInit {

  listPhongBan: PhongBan[] ;
  listNotPaging: PhongBan[] ;
  indexPagination: number = 1;
  totalPagination: number;
  listToaNha: ToaNha[] = [];
  toaNhaId: number;
  constructor(private service: PhongBanService , private router: Router, private toanhaService: ToaNhaService) { }

  ngOnInit(): void {
    this.getPhongBan();
    this.getToaNha()
  }

  getToaNha(){
    this.toanhaService.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  private getPhongBan(){
    this.service.getPage(0).subscribe((data) => {
      this.listPhongBan = data;
    })
    this.service.getAll().subscribe((data) => {
      this.listNotPaging = data;
      if(this.listNotPaging.length % 10 != 0){
        this.totalPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
      }
    })
  }

  update(id: Number){
    this.router.navigate(['/toanha/phongban/update',id]);
  }

  create(){
    this.router.navigate(['/toanha/phongban/create']);
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
      this.listPhongBan = [];
      this.listPhongBan = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  gotoList(){
    this.router.navigate(['/toanha/phongban']);
  }

  filterByToaNha(id: number){
    if(id === 0) this.ngOnInit();
    this.toaNhaId = id;
    this.service.getAllInToaNha(id).subscribe((data) => {
      this.listPhongBan = [];
      this.listPhongBan = data;
    })
  }

  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listPhongBan = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10).subscribe((data) => {
      this.listPhongBan = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listPhongBan = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
        this.listPhongBan = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }


}
