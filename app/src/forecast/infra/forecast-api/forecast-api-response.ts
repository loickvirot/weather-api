export interface ForecastAPIResponse {
  data: ForecastDataResponse[]
  city_name: string
  timezone: string
  lon: number
  lat: number
  country_code: string
  state_code: string
}

export interface ForecastDataResponse {
  ts: number | undefined
  timestamp_local: string | undefined
  timestamp_utc: string | undefined
  datetile: string | undefined
  snow: number | undefined
  snow_depth: number | null | undefined
  precip: number | undefined
  temp: number | undefined
  dewpt: number | undefined
  max_temp: number | undefined
  min_temp: number | undefined
  app_max_temp: number | undefined
  app_min_temp: number | undefined
  rh: number | undefined
  clouds: number | undefined
  weather: Weather | undefined
  slp: number | undefined
  pres: number | undefined
  uv: number | undefined
  max_dhi: number | null | undefined
  vis: number | undefined
  pop: number | undefined
  moon_phase: number | undefined
  sunrise_ts: number | undefined
  sunset_ts: number | undefined
  moonrise_ts: number | undefined
  moonset_ts: number | undefined
  pod: string | undefined
  wind_spd: number | undefined
  wind_dir: number | undefined
  wind_cdir: string | undefined
  wind_cdir_full: string | undefined
}

export interface Weather {
  icon: string | undefined
  code: number | undefined
  description: string | undefined
}
