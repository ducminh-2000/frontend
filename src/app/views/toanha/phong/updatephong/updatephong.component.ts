import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Phong } from '../../../../model/Phong';
import { ToaNha } from '../../../../model/ToaNha';
import { PhongService } from '../../../../services/phong.service';
import { ToaNhaService } from '../../../../services/toa-nha.service';

@Component({
  selector: 'app-updatephong',
  templateUrl: './updatephong.component.html',
  styleUrls: ['./updatephong.component.scss']
})
export class UpdatephongComponent implements OnInit {

  constructor(private service: PhongService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,) { }
  phongBan: Phong = new Phong();
  listToaNha: ToaNha[] = [];
  id: number;

  ngOnInit(): void {
    this.getToaNha();
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.phongBan = data;
    })
  }

  getToaNha() {
    this.toaNha.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  onSubmit() {
    this.service.update(this.id,this.phongBan).subscribe((data) => {
      alert("Thêm thành công bản ghi");
      this.gotoList();
    }, error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }
  back() {
    this.gotoList();
  }
  gotoList() {
    this.router.navigate(['/toanha/phong']);
  }

}
