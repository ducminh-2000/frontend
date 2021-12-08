import { NVToaNha } from './NVToaNha';
import { CongTy } from './CongTy';
export interface HopDong{
  id?: number;
  ngayTao?: String;
  ngayHetHan?: String;
  ghiChu?: String;
  gia?: number;
  congTy?: CongTy;
  nvToaNha?: NVToaNha;
}
