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
    this.router.navigate(['/congty']);
  }
}
