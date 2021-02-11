type SeriesSize = 'sm' | 'md' | 'lg';

export interface SimpleOptions {
  src: string;
  vars:string
  showSeriesCount: boolean;
  seriesCountSize: SeriesSize;
}
