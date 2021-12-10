import { DichVu } from './../../../../model/DichVu';
import { DichVuService } from './../../../../services/dich-vu.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToaNhaService } from '../../../../services/toa-nha.service';
import { PhongBanService } from '../../../../services/phong-ban.service';
import { ToaNha } from '../../../../model/ToaNha';
import { PhongBan } from '../../../../model/PhongBan';

@Component({
  selector: 'app-updatedichvu',
  templateUrl: './updatedichvu.component.html',
  styleUrls: ['./updatedichvu.component.scss']
})
export class UpdatedichvuComponent implements OnInit {

  constructor(private service: DichVuService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,
    private phongBan: PhongBanService) { }
  dichVu: DichVu = new DichVu();
  listToaNha: ToaNha[] = [];
  listPhongBan: PhongBan[] = [];
  id: number;
  tn: ToaNha;

  ngOnInit(): void {
    this.getToaNha();
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.dichVu = data;
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
  onSubmit(){
    this.service.update(this.id,this.dichVu).subscribe((data) => {
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
    this.router.navigate(['/toanha/dichvu']);
  }

}
