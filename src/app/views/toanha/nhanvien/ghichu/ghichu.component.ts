import { GhiChu } from './../../../../model/GhiChu';
import { Component, OnInit } from '@angular/core';
import { GhiChuService } from '../../../../services/ghi-chu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ghichu',
  templateUrl: './ghichu.component.html',
  styleUrls: ['./ghichu.component.scss']
})
export class GhichuComponent implements OnInit {
  listGhiChu: GhiChu[];
  indexPagination: number =1;
  listNotPaging: any;
  totalPagination: number;
  idNv: number;

  constructor(private service: GhiChuService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idNv = parseInt(this.router.url.split('/')[3]);
    this.getGhiChu();
  }

  private getGhiChu(){
    this.service.getAllByNV(this.idNv).subscribe((data) => {
      this.listGhiChu = data;
    })
  }

  create(){
    this.router.navigate([`/toanha/nhanvien/${this.idNv}/ghichu/create/`]);
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
    this.service.search(this.idNv,key).subscribe((data) => {
      this.listGhiChu = [];
      this.listGhiChu = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  gotoList(){
    this.router.navigate(['/congty']);
  }

  back(){
    this.router.navigate(['/toanha/nhanvien/'])
  }

  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.indexPagination * 10 - 10,this.idNv).subscribe((data) => {
      this.listGhiChu = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10,this.idNv).subscribe((data) => {
      this.listGhiChu = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10,this.idNv).subscribe((data) => {
      this.listGhiChu = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10,this.idNv).subscribe((data) => {
        this.listGhiChu = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

}
