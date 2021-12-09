import { ToaNha } from './../../../model/ToaNha';
import { Component, OnInit } from '@angular/core';
import { ToaNhaService } from '../../../services/toa-nha.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createtoanha',
  templateUrl: './createtoanha.component.html',
  styleUrls: ['./createtoanha.component.scss']
})
export class CreatetoanhaComponent implements OnInit {

  toanha: ToaNha = new ToaNha();
  constructor(private service: ToaNhaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(){
    this.service.create(this.toanha).subscribe((data) => {
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
    this.router.navigate(['/toanha']);
  }

}
