import { NVCongTy } from './../../../../model/NVCongTy';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CongTy } from '../../../../model/CongTy';
import { CongTyService } from '../../../../services/cong-ty.service';
import { NVToaNhaService } from '../../../../services/nvtoa-nha.service';
import { NVNVCongTyService } from '../../../../services/nvcong-ty.service';

@Component({
  selector: 'app-updatenhanvien',
  templateUrl: './updatenhanvien.component.html',
  styleUrls: ['./updatenhanvien.component.scss']
})
export class UpdatenhanvienComponent implements OnInit {

  listCongTy: CongTy[] = [];
  nv: NVCongTy = new NVCongTy();
  idCty: number;
  id: number;
  constructor(private nvService: NVNVCongTyService,private service: CongTyService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.idCty = parseInt(this.router.url.split('/')[2]);
    this.id = parseInt(this.router.url.split('/')[5]);
    this.getCongTy();
    this.getNhanVien();
  }

  getNhanVien(){
    this.nvService.getById(this.id).subscribe((data) =>{
      this.nv = data;
    })
  }
  getCongTy(){
    this.service.getAll().subscribe((data) => {
      this.listCongTy = data;
    })
  }
  onSubmit(){
    this.nvService.create(this.nv).subscribe((data) => {
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
    this.router.navigate([`/congty/${this.idCty}/nhanvien`]);
  }
}
