import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Industry from '../../model/Industry';
import Stock from '../../model/Stock';
import { IndustryService } from '../../services/industry.service';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-advise',
  templateUrl: './advise.component.html',
  styleUrls: ['./advise.component.scss']
})
export class AdviseComponent implements OnInit {
  constructor(private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router,
    private industrySẻvice: IndustryService,
  ) { }
  namHoaVon: number = 1;
  listStock: Stock[] = [];
  listIndustry: Industry[] = [];
  stock: Stock = new Stock();

  ngOnInit(): void {
    this.getIndustry();
  }

  getIndustry(){
    this.industrySẻvice.getAll().subscribe((data) => {
      this.listIndustry = data;
    })
  }

  getStock(id: number){
    console.log(id)
    this.stockService.getByIndustry(id).subscribe((data) => {
      this.listStock = data;
    })
  }
  onSubmit(){
    this.stockService.checkStock(this.stock).subscribe((data) => {
      alert("Thêm thành công bản ghi");
    }, error => {
      alert("Có lỗi xảy ra, mã lỗi: " + error.status);
    })
  }
  back(){
    this.gotoList();
  }
  gotoList(){
    this.router.navigate(['/toanha/dichvu']);
  }

}
