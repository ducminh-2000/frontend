import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhongBan } from '../../../../model/PhongBan';
import { ToaNha } from '../../../../model/ToaNha';
import { PhongBanService } from '../../../../services/phong-ban.service';
import { ToaNhaService } from '../../../../services/toa-nha.service';

@Component({
  selector: 'app-updatephongban',
  templateUrl: './updatephongban.component.html',
  styleUrls: ['./updatephongban.component.scss']
})
export class UpdatephongbanComponent implements OnInit {

  constructor(private service: PhongBanService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,) { }
    phongBan: PhongBan = new PhongBan();
    listToaNha: ToaNha[] = [];
    id: number;

  ngOnInit(): void {
    this.getToaNha();
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.phongBan = data;
    })
  }

  getToaNha(){
    this.toaNha.getAll().subscribe((data) => {
      this.listToaNha = data;
    })
  }

  onSubmit(){
    this.service.update(this.id,this.phongBan).subscribe((data) => {
      alert("Sửa thành công bản ghi");
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
