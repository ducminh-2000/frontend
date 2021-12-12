import { PhongBanService } from './../../../../services/phong-ban.service';
import { PhongBan } from './../../../../model/PhongBan';
import { ToaNha } from './../../../../model/ToaNha';
import { Component, OnInit } from '@angular/core';
import { ToaNhaService } from '../../../../services/toa-nha.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-switchtoanha',
  templateUrl: './switchtoanha.component.html',
  styleUrls: ['./switchtoanha.component.scss']
})
export class SwitchtoanhaComponent implements OnInit {
  listCongTy: ToaNha[];
  listPhongBan: PhongBan[];

  toaNha: number;
  phong: number;
  constructor(private service: ToaNhaService, private pbs:PhongBanService , private router: Router) { }

  ngOnInit(): void {
    this.getCongTy();
  }

  getCongTy(){
    this.service.getAll().subscribe((data) => {
      this.listCongTy = data;
    })
  }

  getPhongBan(id: number){
    this.pbs.getAllInToaNha(id).subscribe((data) => {
      this.listPhongBan = data;
    })
  }
  onSubmit(){
    console.log(this.toaNha)
    this.router.navigate([`/toanha/${this.toaNha}/bangluong/phongban/${this.phong}`])
  }

  back(){
    this.router.navigate(['/toanha/switch']);
  }
}
