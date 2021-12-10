import { NVToaNhaService } from './../../../../services/nvtoa-nha.service';
import { NVToaNha } from './../../../../model/NVToaNha';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GhiChu } from '../../../../model/GhiChu';
import { GhiChuService } from '../../../../services/ghi-chu.service';

@Component({
  selector: 'app-ghichucreate',
  templateUrl: './ghichucreate.component.html',
  styleUrls: ['./ghichucreate.component.scss']
})
export class GhichucreateComponent implements OnInit {

  note: GhiChu = new GhiChu();
  idCty: number;
  constructor(private service: GhiChuService,private nhanVienservice: NVToaNhaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.idCty = parseInt(this.router.url.split('/')[3]);
    this.getNhanVien();
  }

  getNhanVien(){
    this.nhanVienservice.getById(this.idCty).subscribe((data) => {
      this.note.nhanVien = data;
    })
  }
  onSubmit(){
    this.service.create(this.note).subscribe((data) => {
      console.log(data)
      alert("Thêm thành công bản ghi");
      this.gotoList();
    }, error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }
  back(){
    this.gotoList();
  }
  gotoList(){
    this.router.navigate([`/toanha/nhanvien/${this.idCty}/ghichu`]);
  }
}
