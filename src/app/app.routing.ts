import { ToanhaComponent } from './views/toanha/toanha.component';
import { CongtyComponent } from './views/congty/congty.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { CreateComponent } from './views/congty/create/create.component';
import { UpdateComponent } from './views/congty/update/update.component';
import { CreatetoanhaComponent } from './views/toanha/createtoanha/createtoanha.component';
import { UpdatetoanhaComponent } from './views/toanha/updatetoanha/updatetoanha.component';
import { PhongComponent } from './views/toanha/phong/phong.component';
import { DichvuComponent } from './views/toanha/dichvu/dichvu.component';
import { NhanvienComponent } from './views/toanha/nhanvien/nhanvien.component';
import { BangluongComponent } from './views/toanha/bangluong/bangluong.component';
import { DichvudasudungComponent } from './views/toanha/dichvudasudung/dichvudasudung.component';
import { HopdongComponent } from './views/hopdong/hopdong.component';
import { NhanviencreateComponent } from './views/toanha/nhanvien/nhanviencreate/nhanviencreate.component';
import { NhanvienupdateComponent } from './views/toanha/nhanvien/nhanvienupdate/nhanvienupdate.component';
import { CreatedichvuComponent } from './views/toanha/dichvu/createdichvu/createdichvu.component';
import { UpdatedichvuComponent } from './views/toanha/dichvu/updatedichvu/updatedichvu.component';
import { PhongbanComponent } from './views/toanha/phongban/phongban.component';
import { CreatephongbanComponent } from './views/toanha/phongban/createphongban/createphongban.component';
import { UpdatephongbanComponent } from './views/toanha/phongban/updatephongban/updatephongban.component';
import { CreatephongComponent } from './views/toanha/phong/createphong/createphong.component';
import { UpdatephongComponent } from './views/toanha/phong/updatephong/updatephong.component';
import { UpdatenhanvienComponent } from './views/congty/nhanviencongty/updatenhanvien/updatenhanvien.component';
import { CreatenhanvienComponent } from './views/congty/nhanviencongty/createnhanvien/createnhanvien.component';
import { SwitchComponent } from './views/congty/nhanviencongty/switch/switch.component';
import { NhanviencongtyComponent } from './views/congty/nhanviencongty/nhanviencongty.component';
import { GhichuComponent } from './views/toanha/nhanvien/ghichu/ghichu.component';
import { GhichucreateComponent } from './views/toanha/nhanvien/ghichucreate/ghichucreate.component';
import { SwitchtoanhaComponent } from './views/toanha/bangluong/switchtoanha/switchtoanha.component';
import { LuongdetailComponent } from './views/toanha/bangluong/luongdetail/luongdetail.component';
import { SwitchhopdongComponent } from './views/hopdong/switchhopdong/switchhopdong.component';
import { CreatehopdongComponent } from './views/hopdong/createhopdong/createhopdong.component';
import { UpdatehopdongComponent } from './views/hopdong/updatehopdong/updatehopdong.component';
import { StockComponent } from './views/stock/stock.component';
import { AdviseComponent } from './views/advise/advise.component';
import { IndustryComponent } from './views/industry/industry.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'stock',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'stock',
        data: {
          title: 'Stock'
        },
        children: [
          {
            path: '',
            data: {
              title: 'Stock'
            },
            component: AdviseComponent,
          },
          {
            path: 'market',
            data: {
              title: 'Danh sách mã'
            },
            component: StockComponent,
          },
          {
            path: 'industry',
            data: {
              title: 'Danh sách ngành'
            },
            component: IndustryComponent,
          },
        ]
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
