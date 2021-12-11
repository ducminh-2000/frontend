import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GhiChu } from '../../../../model/GhiChu';
import { TKLuong } from '../../../../model/TKLuong';
import { GhiChuService } from '../../../../services/ghi-chu.service';
import { NVToaNhaService } from '../../../../services/nvtoa-nha.service';
import { TKLuongService } from '../../../../services/tkluong.service';

@Component({
  selector: 'app-luongdetail',
  templateUrl: './luongdetail.component.html',
  styleUrls: ['./luongdetail.component.scss']
})
export class LuongdetailComponent implements OnInit {
  luong: TKLuong = new TKLuong();
  indexPagination: number = 1;
  listNotPaging: any;
  totalPagination: number;
  idNv: number;
  start: String;
  end: String;
  month: String;
  id:number;
  listGhiChu: GhiChu[] = [];
  constructor(private service: TKLuongService, private ghiChu: GhiChuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idNv = parseInt(this.router.url.split('/')[2]);
    this.id = this.route.snapshot.params['id'];
    var data = new Date().getTime();
    var date = new Date(data);
    var day = date.getUTCDate().toString();
    this.month = (date.getMonth() + 1).toString();
    var year = date.getFullYear().toString();
    this.start = `${year}-${this.month}-01`;
    this.end = `${year}-${this.month}-${day}`;
    this.getGhiChu();
    this.getLuong();
  }

  private getLuong() {
    this.service.getLuongById(this.start,this.end,this.id,this.idNv).subscribe((data) => {
      this.luong = data;
    })
  }

  getGhiChu(){
    this.ghiChu.getAllByNV(this.id).subscribe((data) => {
      this.listGhiChu = data;
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
    this.router.navigate([`toanha/${this.idNv}/bangluong`])
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
