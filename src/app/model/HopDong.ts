import { PhongSuDung } from './PhongSuDung';
import { NVToaNha } from './NVToaNha';
import { CongTy } from './CongTy';
import { ToaNha } from './ToaNha';
import { DichVuSuDung } from './DichVuSuDung';
export class HopDong{
  id?: number;
  ngayTao?: Date;
  ngayHetHan?: Date;
  ghiChu?: String;
  gia?: number;
  congTy?: CongTy;
  toaNha?: ToaNha;
  listPhongSuDung: PhongSuDung[];
  listDVSuDung: DichVuSuDung[];
}
