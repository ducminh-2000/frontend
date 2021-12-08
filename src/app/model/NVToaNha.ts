import { PhongBan } from './PhongBan';
import { LuongViTri } from './LuongViTri';
export interface NVToaNha{
  id?: number;
  ten?: String;
  ngaySinh?: String;
  diaChi?: String;
  sdt?: String;
  bac?: number;
  luongViTri?: LuongViTri;
  phongBan?: PhongBan;
}
