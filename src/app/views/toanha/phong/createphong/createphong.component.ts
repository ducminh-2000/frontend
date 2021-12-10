import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phong } from '../../../../model/Phong';
import { ToaNha } from '../../../../model/ToaNha';
import { PhongService } from '../../../../services/phong.service';
import { ToaNhaService } from '../../../../services/toa-nha.service';

@Component({
  selector: 'app-createphong',
  templateUrl: './createphong.component.html',
  styleUrls: ['./createphong.component.scss']
})
export class CreatephongComponent implements OnInit {

  constructor(private service: PhongService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,) { }
  phongBan: Phong = new Phong();
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
    this.router.navigate(['/toanha/phong']);
  }

}
