export interface WeatherAPIResponse {
  count: number
  data: WeatherAPIResponseData[]
}

export interface WeatherAPIResponseData {
  city_name: string | undefined
  state_code: string | undefined
  country_code: string | undefined
  timezone: string | undefined
  lat: number | undefined
  lon: number | undefined
  station: string | undefined
  sources: string[] | undefined
  vis: number | undefined
  rh: number | undefined
  dewpt: number | undefined
  wind_dir: number | undefined
  wind_cdir: string | undefined
  wind_cdir_full: string | undefined
  wind_spd: number | undefined
  gust: number | null | undefined
  temp: number | undefined
  app_temp: number | undefined
  clouds: number | undefined
  weather: WeatherData | undefined
  datetime: string | undefined
  ob_time: string | undefined
  ts: number | undefined
  sunrise: string | undefined
  sunset: string | undefined
  slp: number | undefined
  pres: number | undefined
  aqi: number | undefined
  uv: number | undefined
  solar_rad: number | undefined
  ghi: number | undefined
  dni: number | undefined
  dhi: number | undefined
  elev_angle: number | undefined
  hour_angle: number | null | undefined
  pod: string | undefined
  precip: number | undefined
  snow: number | undefined
}

export interface WeatherData {
  icon: string | undefined
  code: number | undefined
  description: string | undefined
}
