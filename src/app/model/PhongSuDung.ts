import { DichVuSuDung } from './DichVuSuDung';
import { HopDong } from './HopDong';
import { Phong } from './Phong';
export class PhongSuDung{
  id?: number;
  giamGia?: number;
  ghiChu?: String;
  ngayBatDau?: String;
  phong?: Phong;
  hopDong?: HopDong;
  dvSuDung?: DichVuSuDung[];
}
