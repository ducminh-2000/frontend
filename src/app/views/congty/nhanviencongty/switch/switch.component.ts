import { Router } from '@angular/router';
import { CongTyService } from './../../../../services/cong-ty.service';
import { Component, OnInit } from '@angular/core';
import { CongTy } from '../../../../model/CongTy';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  listCongTy: CongTy[];
  ct: CongTy = new CongTy();
  constructor(private service: CongTyService, private router: Router) { }

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
    this.router.navigate([`/congty/${this.ct}/nhanvien`])
  }

  back(){
    this.router.navigate(['/congty']);
  }
}
