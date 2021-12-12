import { HopDong } from './../../model/HopDong';
import { Component, OnInit } from '@angular/core';
import { HopDongService } from '../../services/hop-dong.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hopdong',
  templateUrl: './hopdong.component.html',
  styleUrls: ['./hopdong.component.scss']
})
export class HopdongComponent implements OnInit {

  listHopDong: HopDong[];
  indexPagination: number =1;
  listNotPaging: any;
  totalPagination: number;
  id: number
  x: number = 0.0
  constructor(private service: HopDongService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = parseInt(this.router.url.split('/')[3]);
    this.getHopDong();
  }

  private getHopDong(){
    this.service.getAllByToaNha(this.id).subscribe((data) => {
      this.listNotPaging = data;
    })
    this.service.getPage(this.id,0).subscribe((data) => {
      this.listHopDong = data;
    })
  }

  update(id: Number){
    this.router.navigateByUrl(`hopdong/toanha/${this.id}/update/${id}`);
  }

  create(){
    this.router.navigateByUrl(`hopdong/toanha/${this.id}/create/`);
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

  search(id:number,key: Date){
    this.service.search(id,key).subscribe((data) => {
      this.listHopDong = [];
      this.listHopDong = data;
      console.log(data);
    },error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }

  // filter(key: String){
  //   switch (key) {
  //     case '1':
  //       this.service.filterLessThan(10000000).subscribe((data) => {
  //         this.listHopDong = [];
  //         this.listHopDong = data;
  //       })
  //       break;
  //     case '2':
  //       this.service.filterInRange(10000000,20000000).subscribe((data) => {
  //         this.listHopDong = [];
  //         this.listHopDong = data;
  //       })
  //       break;
  //     case '3':
  //       this.service.filterGreaterThan(20000000).subscribe((data) => {
  //         this.listHopDong = [];
  //         this.listHopDong = data;
  //       })
  //       break;
  //     case '4':
  //       this.getCongTy();
  //     default:

  //       break;
  //   }
  // }

  gotoList(){
    this.router.navigate(['/hopdong/switch']);
  }

  firstPage(){
    this.indexPagination = 1;
    this.service.getPage(this.id,this.indexPagination * 10 - 10).subscribe((data) => {
      this.listHopDong = data;
    })
  }

  lastPage(){
    this.indexPagination = (Math.round(this.listNotPaging.length / 10)) + 1;
    this.service.getPage(this.id,(this.indexPagination * 10) - 10).subscribe((data) => {
      this.listHopDong = data;
    })
  }

  nextPage(){
    this.indexPagination = this.indexPagination + 1 ;
    if(this.indexPagination > this.totalPagination){
      this.indexPagination = this.indexPagination - 1;
    }
    this.service.getPage(this.id, this.indexPagination * 10 - 10).subscribe((data) => {
      this.listHopDong = data;
    })
  }

  previousPage(){
    this.indexPagination = this.indexPagination - 1;
    if(this.indexPagination == 0){
      this.indexPagination = 1;
      this.ngOnInit();
    }else{
      this.service.getPage(this.id, this.indexPagination * 10 - 10).subscribe((data) => {
        this.listHopDong = data;
      })
    }
  }
  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }
}
