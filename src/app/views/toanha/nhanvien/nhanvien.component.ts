import { NVToaNhaService } from './../../../services/nvtoa-nha.service';
import { NVToaNha } from './../../../model/NVToaNha';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToaNhaService } from '../../../services/toa-nha.service';
import { ToaNha } from '../../../model/ToaNha';

@Component({
  selector: 'app-nhanvien',
  templateUrl: './nhanvien.component.html',
  styleUrls: ['./nhanvien.component.scss']
})
export class NhanvienComponent implements OnInit {
  listNhanVien: NVToaNha[] ;
  listNotPaging: NVToaNha[] ;
  indexPagination: number = 1;
  totalPagination: number;
  listToaNha: ToaNha[] = [];
  toaNhaId: number;
  constructor(private service: NVToaNhaService, private router: Router, private toanhaService: ToaNhaService) { }

  ngOnInit(): void {
    this.getNhanVien();
    this.getToaNha()
  }

  getToaNha(){
    this.toanhaService.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  private getNhanVien(){
    this.service.getPage(0).subscribe((data) => {
      this.listNhanVien = data;
    })
    this.service.getAll().subscribe((data) => {
      this.listNotPaging = data;
      if(this.listNotPaging.length % 10 != 0){
        this.totalPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
      }
    })
  }

  update(id: Number){
    this.router.navigate(['/toanha/nhanvien/update',id]);
  }

  create(){
    this.router.navigate(['/toanha/nhanvien/create']);
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
      this.listNhanVien = [];
      this.listNhanVien = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  gotoList(){
    this.router.navigate(['/toanha/nhanvien']);
  }

  filterByToaNha(id: number){
    if(id == 0) this.ngOnInit()
    this.toaNhaId = id;
    this.service.getAllInToaNha(id).subscribe((data) => {
      this.listNhanVien = [];
      this.listNhanVien = data;
    })
  }

  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
        this.listNhanVien = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }
}
