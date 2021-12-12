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
            path: 'switch',
            data: {
              title: 'Chọn công ty'
            },
            component: SwitchComponent,
          },
          {
            path: ':id/nhanvien',
            data: {
              title: 'Nhân viên công ty'
            },
            component: NhanviencongtyComponent,
          },
          {
            path: ':id/nhanvien/create',
            data: {
              title: 'create nhân viên công ty'
            },
            component: CreatenhanvienComponent,
          },
          {
            path: ':id/nhanvien/update/:id',
            data: {
              title: 'Update nhân viên công ty'
            },
            component: UpdatenhanvienComponent,
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
        path: 'hopdong/switch',
        component: SwitchhopdongComponent,
        data: {
          title: 'Hợp đồng'
        }
      },
      {
        path: 'hopdong/toanha/:id',
        component: HopdongComponent,
        data: {
          title: 'Hợp đồng'
        }
      },
      {
        path: 'hopdong/toanha/:id/create/',
        component: CreatehopdongComponent,
        data: {
          title: 'Create Hợp đồng'
        }
      },
      {
        path: 'hopdong/toanha/:id/update/:id',
        component: UpdatehopdongComponent,
        data: {
          title: 'Update Hợp đồng'
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
            path: 'phong/create',
            component: CreatephongComponent,
            data: {
              title: 'Phòng'
            }
          },
          {
            path: 'phong/update/:id',
            component: UpdatephongComponent,
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
            path: 'dichvu/create',
            component: CreatedichvuComponent,
            data: {
              title: 'Dịch Vụ'
            }
          },
          {
            path: 'dichvu/update/:id',
            component: UpdatedichvuComponent,
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
            path: 'nhanvien/:id/ghichu',
            component: GhichuComponent,
            data: {
              title: 'Ghi chu'
            },
          },
          {
            path: 'nhanvien/:id/ghichu/create',
            component: GhichucreateComponent,
            data: {
              title: 'Ghi chu'
            },
          },
          {
            path: 'phongban',
            component: PhongbanComponent,
            data: {
              title: 'Phòng ban'
            },
          },
          {
            path: 'phongban/create',
            component: CreatephongbanComponent,
            data: {
              title: 'CreatePhòng ban'
            },
          },
          {
            path: 'phongban/update/:id',
            component: UpdatephongbanComponent,
            data: {
              title: 'Update Phòng ban'
            },
          },
          {
            path: 'switch',
            component: SwitchtoanhaComponent,
            data: {
              title: 'Chọn tòa nhà'
            }
          },
          {
            path: ':id/bangluong/phongban/:id',
            component: BangluongComponent,
            data: {
              title: 'Bảng lương theo tòa nhà'
            }
          },
          {
            path: ':id/bangluong/:id',
            component: LuongdetailComponent,
            data: {
              title: 'Chi tiết lương nhân viên'
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
