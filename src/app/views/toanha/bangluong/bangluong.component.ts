import { TKLuongService } from './../../../services/tkluong.service';
import { TKLuong } from './../../../model/TKLuong';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-bangluong',
  templateUrl: './bangluong.component.html',
  styleUrls: ['./bangluong.component.scss']
})
export class BangluongComponent implements OnInit {

  listTKluong: TKLuong[];
  indexPagination: number = 1;
  listNotPaging: any;
  totalPagination: number;
  idNv: number;
  start: String;
  end: String;
  month: String;
  id: number;
  constructor(private service: TKLuongService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idNv = parseInt(this.router.url.split('/')[2]);
    this.id = parseInt(this.router.url.split('/')[5]);
    var data = new Date().getTime();
    var date = new Date(data);
    var day = date.getUTCDate().toString();
    this.month = (date.getMonth() + 1).toString();
    var year = date.getFullYear().toString();
    this.start = `${year}-${this.month}-01`;
    this.end = `${year}-${this.month}-${day}`;
    this.getLuong();
  }

  private getLuong() {
    this.service.getAllLuongByToaNha(this.idNv,this.start,this.end,this.id).subscribe((data) => {
      this.listTKluong = data;
    })
  }

  handleDetail(id: number){
    this.router.navigate([`toanha/${this.idNv}/bangluong/`,id])
  }

  // search(key: String){
  //   this.service.search(this.idNv,key).subscribe((data) => {
  //     this.listTKluong = [];
  //     this.listTKluong = data;
  //     console.log(data);
  //   },error => {
  //     alert("Có lỗi xảy ra, mã lỗi: " + error.status);
  //   })
  // }

  gotoList() {
    this.router.navigate(['/congty']);
  }

  back() {
    this.router.navigate(['/toanha/switch/'])
  }

  // firstPage(){
  //   this.indexPagination = 1;
  //   this.service.getPage(this.indexPagination * 10 - 10,this.idNv).subscribe((data) => {
  //     this.listTKluong = data;
  //   })
  // }

  // lastPage(){
  //   this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
  //   this.service.getPage((this.indexPagination * 10) - 10,this.idNv).subscribe((data) => {
  //     this.listTKluong = data;
  //   })
  // }

  // nextPage(){
  //   this.indexPagination = this.indexPagination + 1 ;
  //   if(this.indexPagination > this.totalPagination){
  //     this.indexPagination = this.indexPagination - 1;
  //   }
  //   this.service.getPage(this.indexPagination * 10 - 10,this.idNv).subscribe((data) => {
  //     this.listTKluong = data;
  //   })
  // }

  // previousPage(){
  //   this.indexPagination = this.indexPagination - 1;
  //   if(this.indexPagination == 0){
  //     this.indexPagination = 1;
  //     this.ngOnInit();
  //   }else{
  //     this.service.getPage(this.indexPagination * 10 - 10,this.idNv).subscribe((data) => {
  //       this.listTKluong = data;
  //     })
  //   }
  // }
  // indexPaginationChage(value: number) {
  //   this.indexPagination = value;
  // }

}
