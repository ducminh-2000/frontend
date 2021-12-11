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
  ct: ToaNha = new ToaNha();
  constructor(private service: ToaNhaService, private router: Router) { }

  ngOnInit(): void {
    this.getCongTy()
  }

  getCongTy(){
    this.service.getAll().subscribe((data) => {
      this.listCongTy = data;
    })
  }

  onSubmit(){
    console.log(this.ct)
    this.router.navigate([`/toanha/${this.ct}/bangluong`])
  }

  back(){
    this.router.navigate(['/toanha/switch']);
  }
}
