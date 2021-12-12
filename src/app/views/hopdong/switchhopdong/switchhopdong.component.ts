import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToaNha } from '../../../model/ToaNha';
import { ToaNhaService } from '../../../services/toa-nha.service';

@Component({
  selector: 'app-switchhopdong',
  templateUrl: './switchhopdong.component.html',
  styleUrls: ['./switchhopdong.component.scss']
})
export class SwitchhopdongComponent implements OnInit {
  listCongTy: ToaNha[];
  toaNha: number;
  phong: number;
  constructor(private service: ToaNhaService, private router: Router) { }

  ngOnInit(): void {
    this.getCongTy();
  }

  getCongTy(){
    this.service.getAll().subscribe((data) => {
      this.listCongTy = data;
    })
  }
  onSubmit(){
    console.log(this.toaNha)
    this.router.navigate([`/hopdong/toanha/`,this.phong])
  }

  back(){
    this.router.navigate(['/hopdong/switch']);
  }

}
