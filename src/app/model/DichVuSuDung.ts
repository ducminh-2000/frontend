import { PhongSuDung } from './PhongSuDung';
import { DichVu } from './DichVu';
export interface DichVuSuDung{
  id?: number;
  soLuong?: number;
  giamGia?: number;
  gia?: number;
  dichVu?: DichVu;
  phongSuDung?: PhongSuDung
}
