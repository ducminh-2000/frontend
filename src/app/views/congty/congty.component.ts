import { CongTy } from './../../model/CongTy';
import { Component, OnInit } from '@angular/core';
import { CongTyService } from '../../services/cong-ty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-congty',
  templateUrl: './congty.component.html',
  styleUrls: ['./congty.component.scss']
})
export class CongtyComponent implements OnInit {

  listCongTy: CongTy[];
  indexPagination: number =1;
  listNotPaging: any;
  totalPagination: number;

  constructor(private service: CongTyService, private router: Router) { }

  ngOnInit(): void {
    this.getCongTy();
  }

  private getCongTy(){
    this.service.getAll().subscribe((data) => {
      this.listCongTy = data;
    })
  }

  update(id: Number){
    this.router.navigate(['/congty/update',id]);
  }

  create(){
    this.router.navigate(['/congty/create']);
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

  show(id: number){
    this.router.navigate(['/congty/nhanvien',id]);
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

  filter(key: String){
    switch (key) {
      case '1':
        this.service.filterLessThan(10000000).subscribe((data) => {
          this.listCongTy = [];
          this.listCongTy = data;
        })
        break;
      case '2':
        this.service.filterInRange(10000000,20000000).subscribe((data) => {
          this.listCongTy = [];
          this.listCongTy = data;
        })
        break;
      case '3':
        this.service.filterGreaterThan(20000000).subscribe((data) => {
          this.listCongTy = [];
          this.listCongTy = data;
        })
        break;
      case '4':
        this.getCongTy();
      default:

        break;
    }
  }

  gotoList(){
    this.router.navigate(['/congty']);
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
