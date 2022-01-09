export interface MyStockInfo {
  id: string;
  ticker: string;
  name: string;
  current: number;
  avg: number;
  amount: number;
  upDown: number;
}

interface ThumbnailChartData {
  x: string;
  y: number;
}

export interface ThumbnailChartDatas extends Array<ThumbnailChartData> {}
