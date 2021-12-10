import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DichVu } from '../../../../model/DichVu';
import { PhongBan } from '../../../../model/PhongBan';
import { ToaNha } from '../../../../model/ToaNha';
import { DichVuService } from '../../../../services/dich-vu.service';
import { PhongBanService } from '../../../../services/phong-ban.service';
import { ToaNhaService } from '../../../../services/toa-nha.service';

@Component({
  selector: 'app-createdichvu',
  templateUrl: './createdichvu.component.html',
  styleUrls: ['./createdichvu.component.scss']
})
export class CreatedichvuComponent implements OnInit {

  constructor(private service: DichVuService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,
    private phongBan: PhongBanService,) { }
  dichVu: DichVu = new DichVu();
  listToaNha: ToaNha[] = [];
  listPhongBan: PhongBan[] = [];

  ngOnInit(): void {
    this.getToaNha();
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
  onSubmit(){
    this.service.create(this.dichVu).subscribe((data) => {
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
    this.router.navigate(['/toanha/dichvu']);
  }
}
