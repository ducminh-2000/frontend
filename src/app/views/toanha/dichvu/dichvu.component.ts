import { DichVuService } from './../../../services/dich-vu.service';
import { DichVu } from './../../../model/DichVu';
import { Component, OnInit } from '@angular/core';
import { ToaNha } from '../../../model/ToaNha';
import { Router } from '@angular/router';
import { ToaNhaService } from '../../../services/toa-nha.service';

@Component({
  selector: 'app-dichvu',
  templateUrl: './dichvu.component.html',
  styleUrls: ['./dichvu.component.scss']
})
export class DichvuComponent implements OnInit {

  listDichVu: DichVu[] ;
  listNotPaging: DichVu[] ;
  indexPagination: number = 1;
  totalPagination: number;
  listToaNha: ToaNha[] = [];
  toaNhaId: number;
  constructor(private service: DichVuService , private router: Router, private toanhaService: ToaNhaService) { }

  ngOnInit(): void {
    this.getDichVu();
    this.getToaNha()
  }

  getToaNha(){
    this.toanhaService.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  private getDichVu(){
    this.service.getPage(0).subscribe((data) => {
      this.listDichVu = data;
    })
    this.service.getAll().subscribe((data) => {
      this.listNotPaging = data;
      if(this.listNotPaging.length % 10 != 0){
        this.totalPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
      }
    })
  }

  update(id: Number){
    this.router.navigate(['/toanha/dichvu/update',id]);
  }

  create(){
    this.router.navigate(['/toanha/dichvu/create']);
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
      this.listDichVu = [];
      this.listDichVu = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  gotoList(){
    this.router.navigate(['/toanha/dichvu']);
  }

  filterByToaNha(id: number){
    if(id == 0) this.ngOnInit();
    this.toaNhaId = id;
    this.service.getAllInToaNha(id).subscribe((data) => {
      this.listDichVu = [];
      this.listDichVu = data;
    })
  }

  filter(key: String){
    switch (key) {
      case '1':
        this.service.filterLessThan(100000).subscribe((data) => {
          this.listDichVu = [];
          this.listDichVu = data;
        })
        break;
      case '2':
        this.service.filterInRange(100000,200000).subscribe((data) => {
          this.listDichVu = [];
          this.listDichVu = data;
        })
        break;
      case '3':
        this.service.filterGreaterThan(200000).subscribe((data) => {
          this.listDichVu = [];
          this.listDichVu = data;
        })
        break;
      case '4':
        this.getDichVu();
      default:

        break;
    }
  }
  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listDichVu = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10).subscribe((data) => {
      this.listDichVu = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
      this.listDichVu = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10).subscribe((data) => {
        this.listDichVu = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

}