import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '',
    icon: 'icon-speedometer',
  },
  {
    title: true,
    name: 'Stock',
  },
  {
    name: '1. Stock',
    url: '/stock',
  },
  {
    name: '2. Market',
    url: '/stock/market',
  },
  {
    name: '3. Industry',
    url: '/stock/industry',
  },
];
