import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Quản Lý Công Ty',
  },
  {
    name: '1. Công Ty',
    url: '/congty',
  },
  {
    name: '2. Nhân viên công ty',
    url: '/congty/nhanvien',
  },
  {
    name: '3. Hợp đồng cho thuê',
    url: '/hopdong/',
  },
  {
    title: true,
    name: 'Quản lý toàn nhà'
  },
  {
    name: '1. Tòa nhà',
    children: [
      {
        name: ' - Danh Sách Tòa Nhà',
        url: '/toanha',
      },
      {
        name: ' - Danh sách phòng',
        url: '/toanha/phong',
      },
      {
        name: ' - Danh Sách phòng đã cho thuê',
        url: '/toanha/phongsudung',
      },
    ]
  },
  {
    name: '2. Dịch Vụ',
    url: '',
    children: [
      {
        name: ' - Danh Sách Dịch Vụ',
        url: '/toanha/dichvu',
      },
      {
        name: ' - Dịch Vụ Đã sử dụng',
        url: '/toanha/dichvusudung',
      },
    ]
  },
  {
    name: '3. Nhân viên',
    url: '',
    children: [
      {
        name: ' - Danh sách nhân viên',
        url: '/toanha/nhanvien/',
      },
      {
        name: ' - Bảng lương',
        url: '/toanha/thongke',
      },
    ]
  }
];
