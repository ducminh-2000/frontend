import { HopDong } from './HopDong';
import { Phong } from './Phong';
export interface PhongSuDung{
  id?: number;
  giamGia?: number;
  ghiChu?: String;
  ngayBatDau?: String;
  phong?: Phong;
  hopDong?: HopDong;
}
