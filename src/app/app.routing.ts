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

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'congty',
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
        path: 'congty',
        data: {
          title: 'CongTy'
        },
        children: [
          {
            path: '',
            data: {
              title: 'CongTy'
            },
            component: CongtyComponent,
          },
          {
            path: 'nhanvien/:id',
            data: {
              title: 'Nhân viên công ty'
            },
            component: CongtyComponent,
          },
          {
            path: 'nhanvien/:id/create',
            data: {
              title: 'create nhân viên công ty'
            },
            component: CongtyComponent,
          },
          {
            path: 'nhanvien/:id/update/:id',
            data: {
              title: 'Update nhân viên công ty'
            },
            component: CongtyComponent,
          },
          {
            path: 'create',
            component: CreateComponent,
            data: {
              title: 'Create'
            }
          },
          {
            path: 'update/:id',
            component: UpdateComponent,
            data: {
              title: 'Update'
            }
          }
        ]
      },
      {
        path: 'hopdong',
        component: HopdongComponent,
        data: {
          title: 'Hợp đồng'
        }
      },
      {
        path: 'toanha',
        data: {
          title: 'ToaNha'
        },
        children: [
          {
            path: '',
            data: {
              title: 'ToaNha'
            },
            component: ToanhaComponent,
          },
          {
            path: 'create',
            component: CreatetoanhaComponent,
            data: {
              title: 'Create Toà Nhà'
            }
          },
          {
            path: 'update/:id',
            component: UpdatetoanhaComponent,
            data: {
              title: 'Update Tòa Nhà'
            }
          },
          {
            path: 'phong',
            component: PhongComponent,
            data: {
              title: 'Phòng'
            }
          },
          {
            path: 'dichvu',
            component: DichvuComponent,
            data: {
              title: 'Dịch Vụ'
            }
          },
          {
            path: 'nhanvien',
            component: NhanvienComponent,
            data: {
              title: 'Nhân Viên Tòa Nhà'
            },
          },
          {
            path: 'nhanvien/create',
            component: NhanviencreateComponent,
            data: {
              title: 'Create Nhân viên Tòa Nhà'
            }
          },
          {
            path: 'nhanvien/update/:id',
            component: NhanvienupdateComponent,
            data: {
              title: 'Update Nhân Viên Tòa Nhà'
            }
          },
          {
            path: 'thongke',
            component: BangluongComponent,
            data: {
              title: 'Bảng lương'
            }
          },
          {
            path: 'dichvusudung',
            component: DichvudasudungComponent,
            data: {
              title: 'Dịch vụ sử dụng'
            }
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
