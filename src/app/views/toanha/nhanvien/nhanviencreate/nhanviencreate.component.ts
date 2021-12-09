import { LuongViTri } from './../../../../model/LuongViTri';
import { LuongViTriService } from './../../../../services/luong-vi-tri.service';
import { ToaNha } from './../../../../model/ToaNha';
import { PhongBanService } from './../../../../services/phong-ban.service';
import { CongTyService } from './../../../../services/cong-ty.service';
import { NVToaNha } from './../../../../model/NVToaNha';
import { NVToaNhaService } from './../../../../services/nvtoa-nha.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongTy } from '../../../../model/CongTy';
import { PhongBan } from '../../../../model/PhongBan';
import { ToaNhaService } from '../../../../services/toa-nha.service';

@Component({
  selector: 'app-nhanviencreate',
  templateUrl: './nhanviencreate.component.html',
  styleUrls: ['./nhanviencreate.component.scss']
})
export class NhanviencreateComponent implements OnInit {

  constructor(private service: NVToaNhaService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,
    private phongBan: PhongBanService,
    private luongvitri: LuongViTriService) { }
  nhanvien: NVToaNha = new NVToaNha();
  listToaNha: ToaNha[] = [];
  listPhongBan: PhongBan[] = [];
  listLuongVT: LuongViTri[] = [];

  ngOnInit(): void {
    this.getToaNha();
    this.getViTri();
  }

  getToaNha(){
    this.toaNha.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  getPhongBan(id: number){
    console.log(id)
    this.phongBan.getByToaNha(id).subscribe((data) => {
      this.listPhongBan = data;
    })
  }
  getViTri(){
    this.luongvitri.getAll().subscribe((data) =>{
      this.listLuongVT = data;
    })
  }
  onSubmit(){
    console.log(this.nhanvien.luongViTri)
    this.service.create(this.nhanvien).subscribe((data) => {
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
    this.router.navigate(['/toanha/nhanvien']);
  }

}
