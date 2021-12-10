import { NVNVCongTyService } from './../../../services/nvcong-ty.service';
import { NVCongTy } from './../../../model/NVCongTy';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nhanviencongty',
  templateUrl: './nhanviencongty.component.html',
  styleUrls: ['./nhanviencongty.component.scss']
})
export class NhanviencongtyComponent implements OnInit {

  listNhanVien: NVCongTy[];
  indexPagination: number =1;
  listNotPaging: any;
  totalPagination: number;
  idCty: number;

  constructor(private service: NVNVCongTyService, private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.idCty = parseInt(this.router.url.split('/')[2]);
    this.getNhanVien();
  }

  private getNhanVien(){
    this.service.getAllByCty(this.idCty).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  update(id: Number){
    this.router.navigate([`/congty/${this.idCty}/nhanvien/update/`,id],);
  }

  create(){
    this.router.navigate([`/congty/${this.idCty}/nhanvien/create/`]);
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
    this.service.search(this.idCty,key).subscribe((data) => {
      this.listNhanVien = [];
      this.listNhanVien = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  gotoList(){
    this.router.navigate(['/congty']);
  }

  back(){
    this.router.navigate(['/congty/switch'])
  }

  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.indexPagination * 10 - 10,this.idCty).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage((this.indexPagination * 10) - 10,this.idCty).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.indexPagination * 10 - 10,this.idCty).subscribe((data) => {
      this.listNhanVien = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.indexPagination * 10 - 10,this.idCty).subscribe((data) => {
        this.listNhanVien = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }
}
