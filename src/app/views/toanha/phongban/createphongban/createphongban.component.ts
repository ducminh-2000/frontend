import { PhongBan } from './../../../../model/PhongBan';
import { PhongBanService } from './../../../../services/phong-ban.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToaNhaService } from '../../../../services/toa-nha.service';
import { ToaNha } from '../../../../model/ToaNha';

@Component({
  selector: 'app-createphongban',
  templateUrl: './createphongban.component.html',
  styleUrls: ['./createphongban.component.scss']
})
export class CreatephongbanComponent implements OnInit {


  constructor(private service: PhongBanService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,) { }
  phongBan: PhongBan = new PhongBan();
  listToaNha: ToaNha[] = [];

  ngOnInit(): void {
    this.getToaNha();
  }

  getToaNha(){
    this.toaNha.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  onSubmit(){
    this.service.create(this.phongBan).subscribe((data) => {
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
    this.router.navigate(['/toanha/phongban']);
  }

}
