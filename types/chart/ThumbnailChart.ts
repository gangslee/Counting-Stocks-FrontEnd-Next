export interface ThumbnailChartData {
  x: string;
  y: number;
}

export interface ThumbnailChartDatas {
  history: ThumbnailChartData[];
  max: number;
  maxDate: string;
  min: number;
  minDate: string;
}
