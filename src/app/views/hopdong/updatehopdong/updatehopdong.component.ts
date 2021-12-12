import { DichVuSuDung } from './../../../model/DichVuSuDung';
import { PhongSuDung } from './../../../model/PhongSuDung';
import { ToaNha } from './../../../model/ToaNha';
import { PhongService } from './../../../services/phong.service';
import { CongTyService } from './../../../services/cong-ty.service';
import { CongTy } from './../../../model/CongTy';
import { DichVuSuDungService } from './../../../services/dich-vu-su-dung.service';
import { PhongSuDungService } from './../../../services/phong-su-dung.service';
import { Component, OnInit } from '@angular/core';
import { HopDongService } from '../../../services/hop-dong.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToaNhaService } from '../../../services/toa-nha.service';
import { HopDong } from '../../../model/HopDong';
import { DichVuService } from '../../../services/dich-vu.service';
import { DichVu } from '../../../model/DichVu';
import { Phong } from '../../../model/Phong';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-updatehopdong',
  templateUrl: './updatehopdong.component.html',
  styleUrls: ['./updatehopdong.component.scss']
})
export class UpdatehopdongComponent implements OnInit {

  constructor(private service: HopDongService,
    private modalService: NgbModal,
    private phongSuDungService: PhongSuDungService,
    private dvSuDungService: DichVuSuDungService,
    private phongService: PhongService,
    private dvService: DichVuService,
    private ctService: CongTyService,
    private route: ActivatedRoute,
    private router: Router,
    private toaNha: ToaNhaService,
  ) { }
  t: ToaNha = new ToaNha();
  listToaNha: ToaNha[] = [];
  listCongTy: CongTy[] = [];
  listDichVu: DichVu[] = [];
  listPhongSuDung: PhongSuDung[] = [];
  listPhong: Phong[] = [];
  listPhongCurent: Phong[] = [];
  listDVCurent: DichVu[] = [];
  closeResult = '';
  phongsdCurrent: PhongSuDung[] = []
  dvsdCurrent: DichVuSuDung[] = []
  phongsd: PhongSuDung = new PhongSuDung();
  dvsd: DichVuSuDung = new DichVuSuDung();
  id: number;
  total: number = 0.0;
  start: Date;
  end: Date;
  time_one_day = 1000 * 60 * 60 * 24;
  hdId: number;
  hopDong: HopDong = new HopDong();


  ngOnInit(): void {
    this.id = parseInt(this.router.url.split('/')[3]);
    this.hdId = parseInt(this.router.url.split('/')[5]);
    this.getCongTy();
    this.getDataCurrent(this.hdId)
    this.getData(this.id)
  }

  getDataCurrent(id: number) {
    this.service.getById(id).subscribe((data) => {
      this.hopDong = data;
    })
    this.phongsdCurrent = this.hopDong.listPhongSuDung;
    this.dvsdCurrent = this.hopDong.listDVSuDung;
    this.phongsdCurrent.map((key) => {
      this.listPhongCurent.push(key.phong);
    })
    this.dvsdCurrent.map((key) => {
      this.listDVCurent.push(key.dichVu)
    })
  }

  getCongTy() {
    this.ctService.getAll().subscribe((data) => {
      this.listCongTy = data;
    })
  }

  getData(t: number) {
    this.getDichVu(t);
    this.getPhongEmpty(t);
  }

  getDichVu(id: number) {
    this.dvService.getAllInToaNha(id).subscribe((data) => {
      this.listDichVu = data;
      console.log(this.listDichVu)
    })
  }

  getPhongEmpty(id: number) {
    this.phongService.getAllInToaNha(id).subscribe((data) => {
      this.listPhong = data;
    })
    this.listPhong.map((value, index) => {
      this.listPhongSuDung.map((x) => {
        if (x === value) {
          this.listPhong.splice(index, 1);
        }
      })
    })
  }

  addPhongSuDung(modal: any) {
    this.listPhongCurent.push(this.phongsd.phong);
    this.phongsdCurrent.push(this.phongsd);
    console.log(this.phongsdCurrent);
    modal.close();
    this.phongsd = {};
  }

  addDichVuSuDung(modal: any) {
    this.listDVCurent.push(this.dvsd.dichVu);
    this.dvsd.gia = this.dvsd.dichVu.donGia * this.dvsd.giamGia / 100 * this.dvsd.soLuong;
    this.dvsdCurrent.push(this.dvsd);
    console.log(this.dvsdCurrent)
    modal.close();
    this.dvsd = {};
  }

  removePhong(x: any) {
    this.phongsdCurrent.map((key, index) => {
      if (key.phong === x) {
        this.phongsdCurrent.splice(index, 1);
      }
    })
    this.listPhongCurent.splice(x, 1);
    console.log(this.phongsdCurrent)
  }

  removeDv(x: any) {
    this.dvsdCurrent.map((key, index) => {
      if (key.dichVu === x) {
        this.dvsdCurrent.splice(index, 1);
      }
    })
    this.listDVCurent.splice(x, 1);
  }

  getGia() {
    let start = new Date(this.hopDong.ngayTao.toString());
    let end = new Date(this.hopDong.ngayHetHan.toString());
    let days: number = (end.getTime() - start.getTime()) / this.time_one_day;
    this.phongsdCurrent.map((key) => {
      console.log((key.phong.price - (key.phong.price * (key.giamGia / 100))) * (days / 30));
      this.total += (key.phong.price - (key.phong.price * (key.giamGia / 100))) * (days / 30);
    })
    this.dvsdCurrent.map((data) => {
      console.log((data.dichVu.donGia - (data.dichVu.donGia * (data.giamGia / 100))) * (days / 30))
      this.total += (data.dichVu.donGia - (data.dichVu.donGia * (data.giamGia / 100))) * (days / 30);
    })
  }

  onSubmit() {
    if (this.phongsdCurrent && this.dvsdCurrent) {
      this.getGia();
      this.hopDong.gia = this.total;
      this.phongsdCurrent.map((key) => {
        key.ngayBatDau = this.hopDong.ngayTao.toDateString();
        this.dvSuDungService.create(this.dvsd).subscribe((data) => { })
      })
      this.dvsdCurrent.map((key) => {
        this.phongSuDungService.create(this.phongsd).subscribe((data) => { })
      })
    }
    this.hopDong.listDVSuDung = this.dvsdCurrent;
    this.hopDong.listPhongSuDung = this.phongsdCurrent;
    this.service.update(this.hdId, this.hopDong).subscribe((data) => {
      alert("sửa thành công bản ghi");
      this.gotoList();
    }, error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }
  back() {
    this.gotoList();
  }
  gotoList() {
    this.router.navigate([`hopdong/toanha/${this.id}`]);
  }

  open(content: any) {
    this.modalService.open(content,
      { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult =
          `Dismissed ${this.getDismissReason(reason)}`;
      });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


}
