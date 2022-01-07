export interface ApiResponse {
  data: NasaData;
}

export interface NasaData {
  copyright?: string;
  date?: string;
  explanation?: string;
  hdurl?: string;
  media_type?: 'image' | 'video';
  service_version?: string;
  title?: string;
  url?: string;
}
