import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';


const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular';

// Import routing module
import { AppRoutingModule } from './app.routing';

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts';
import { CongtyComponent } from './views/congty/congty.component';
import { CreateComponent } from './views/congty/create/create.component';
import { UpdateComponent } from './views/congty/update/update.component';
import { FormsModule } from '@angular/forms';
import { ToanhaComponent } from './views/toanha/toanha.component';
import { CreatetoanhaComponent } from './views/toanha/createtoanha/createtoanha.component';
import { UpdatetoanhaComponent } from './views/toanha/updatetoanha/updatetoanha.component';
import { PhongComponent } from './views/toanha/phong/phong.component';
import { DichvuComponent } from './views/toanha/dichvu/dichvu.component';
import { NhanvienComponent } from './views/toanha/nhanvien/nhanvien.component';
import { BangluongComponent } from './views/toanha/bangluong/bangluong.component';
import { DichvudasudungComponent } from './views/toanha/dichvudasudung/dichvudasudung.component';
import { HopdongComponent } from './views/hopdong/hopdong.component';
import { JwPaginationComponent } from 'jw-angular-pagination';
import { NhanviencreateComponent } from './views/toanha/nhanvien/nhanviencreate/nhanviencreate.component';
import { NhanvienupdateComponent } from './views/toanha/nhanvien/nhanvienupdate/nhanvienupdate.component';
import { CreatedichvuComponent } from './views/toanha/dichvu/createdichvu/createdichvu.component';
import { UpdatedichvuComponent } from './views/toanha/dichvu/updatedichvu/updatedichvu.component';
import { UpdatephongComponent } from './views/toanha/phong/updatephong/updatephong.component';
import { CreatephongComponent } from './views/toanha/phong/createphong/createphong.component';
import { PhongbanComponent } from './views/toanha/phongban/phongban.component';
import { CreatephongbanComponent } from './views/toanha/phongban/createphongban/createphongban.component';
import { UpdatephongbanComponent } from './views/toanha/phongban/updatephongban/updatephongban.component';
import { UpdatenhanvienComponent } from './views/congty/nhanviencongty/updatenhanvien/updatenhanvien.component';
import { CreatenhanvienComponent } from './views/congty/nhanviencongty/createnhanvien/createnhanvien.component';
import { SwitchComponent } from './views/congty/nhanviencongty/switch/switch.component';
import { NhanviencongtyComponent } from './views/congty/nhanviencongty/nhanviencongty.component';
import { GhichuComponent } from './views/toanha/nhanvien/ghichu/ghichu.component';
import { GhichucreateComponent } from './views/toanha/nhanvien/ghichucreate/ghichucreate.component';
import { SwitchtoanhaComponent } from './views/toanha/bangluong/switchtoanha/switchtoanha.component';
import { LuongdetailComponent } from './views/toanha/bangluong/luongdetail/luongdetail.component';
import { LuongvitriComponent } from './views/toanha/bangluong/luongvitri/luongvitri.component';
import { SwitchhopdongComponent } from './views/hopdong/switchhopdong/switchhopdong.component';
import { CreatehopdongComponent } from './views/hopdong/createhopdong/createhopdong.component';
import { CreatephongsudungComponent } from './views/toanha/phongsudung/createphongsudung/createphongsudung.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UpdatehopdongComponent } from './views/hopdong/updatehopdong/updatehopdong.component';
import { StockComponent } from './views/stock/stock.component';
import { IndustryComponent } from './views/industry/industry.component';
import { AdviseComponent } from './views/advise/advise.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    IconModule,
    IconSetModule.forRoot(),
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    CongtyComponent,
    CreateComponent,
    UpdateComponent,
    ToanhaComponent,
    CreatetoanhaComponent,
    UpdatetoanhaComponent,
    PhongComponent,
    DichvuComponent,
    NhanvienComponent,
    BangluongComponent,
    DichvudasudungComponent,
    HopdongComponent,
    NhanviencreateComponent,
    NhanvienupdateComponent,
    CreatedichvuComponent,
    UpdatedichvuComponent,
    UpdatephongComponent,
    CreatephongComponent,
    PhongbanComponent,
    CreatephongbanComponent,
    UpdatephongbanComponent,
    UpdatenhanvienComponent,
    CreatenhanvienComponent,
    SwitchComponent,
    NhanviencongtyComponent,
    GhichuComponent,
    GhichucreateComponent,
    SwitchtoanhaComponent,
    LuongdetailComponent,
    LuongvitriComponent,
    SwitchhopdongComponent,
    CreatehopdongComponent,
    CreatephongsudungComponent,
    UpdatehopdongComponent,
    StockComponent,
    IndustryComponent,
    AdviseComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
