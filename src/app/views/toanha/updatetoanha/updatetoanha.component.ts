import { ToaNha } from './../../../model/ToaNha';
import { Component, OnInit } from '@angular/core';
import { ToaNhaService } from '../../../services/toa-nha.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatetoanha',
  templateUrl: './updatetoanha.component.html',
  styleUrls: ['./updatetoanha.component.scss']
})
export class UpdatetoanhaComponent implements OnInit {

  id: Number;
  toanha: ToaNha;

  constructor(private service: ToaNhaService, private route: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    this.toanha = new ToaNha();
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe((data) => {
      this.toanha = data;
    }, error => {
      console.log(error)
    })
  }

  update(){
    this.service.update(this.id,this.toanha).subscribe((data) => {
      console.log(data);
      this.toanha = new ToaNha();
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
    this.router.navigate(['/toanha']);
  }

}
