export interface MyStockInfo {
  id: string;
  ticker: string;
  name: string;
  current: number;
  avg: number;
  amount: number;
  upDown: number;
}

export interface ThumbnailChartData {
  x: Date;
  y: number;
}

export interface ThumbnailChartDatas {
  history: ThumbnailChartData[];
  max: number;
  maxDate: Date;
  min: number;
  minDate: Date;
}
