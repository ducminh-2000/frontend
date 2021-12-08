import { CongTy } from './../../../model/CongTy';
import { ActivatedRoute, Router } from '@angular/router';
import { CongTyService } from './../../../services/cong-ty.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  id: Number;
  congTy: CongTy;

  constructor(private service: CongTyService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.congTy = new CongTy();
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.congTy = data;
    }, error => {
      console.log(error)
    })
  }

  update(){
    this.service.update(this.id,this.congTy).subscribe((data) => {
      console.log(data);
      this.congTy = new CongTy();
      this.gotoList();
      alert("Sửa bản ghi thành công");
    },error => {
      console.log(error);
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }
  onSubmit(){
    this.update();
  }

  back(){
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/congty']);
  }
}
