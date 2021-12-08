import { CongTy } from './../../../model/CongTy';
import { Component, OnInit } from '@angular/core';
import { CongTyService } from '../../../services/cong-ty.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  congTy: CongTy = new CongTy();
  constructor(private service: CongTyService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.service.create(this.congTy).subscribe((data) => {
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
    this.router.navigate(['/congty']);
  }
}
