import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LuongViTri } from '../../../../model/LuongViTri';
import { NVToaNha } from '../../../../model/NVToaNha';
import { PhongBan } from '../../../../model/PhongBan';
import { ToaNha } from '../../../../model/ToaNha';
import { LuongViTriService } from '../../../../services/luong-vi-tri.service';
import { NVToaNhaService } from '../../../../services/nvtoa-nha.service';
import { PhongBanService } from '../../../../services/phong-ban.service';
import { ToaNhaService } from '../../../../services/toa-nha.service';

@Component({
  selector: 'app-nhanvienupdate',
  templateUrl: './nhanvienupdate.component.html',
  styleUrls: ['./nhanvienupdate.component.scss']
})
export class NhanvienupdateComponent implements OnInit {

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
  id: number;
  tn: ToaNha;

  ngOnInit(): void {
    this.getToaNha();
    this.getViTri();
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.nhanvien = data;
    })
    this.getAllPhongBan()
  }

  getToaNha(){
    this.toaNha.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  getAllPhongBan(){
    this.phongBan.getAll().subscribe((data) => {
      this.listPhongBan = data;
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
    this.service.create(this.nhanvien).subscribe((data) => {
      alert("Update thành công bản ghi");
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
