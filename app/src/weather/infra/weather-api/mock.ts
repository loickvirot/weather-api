import { Weather } from '../../domain/entity/weather'
import { WeatherRepository } from '../../domain/repository/weather-repository'
import { WeatherAPIResponse } from './weather-api-response'
import { weatherAPIResponseToWeather } from './weather-factory'

export const mockWeatherReposiory: WeatherRepository = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getCurrentWeather: (city: string): Promise<Weather> => {
    const data = getCurrentWeatherAPIMock()

    return new Promise(
      (resolve: (value: Weather | PromiseLike<Weather>) => void) =>
        resolve(weatherAPIResponseToWeather(data.data[0])),
    )
  },
}

const getCurrentWeatherAPIMock = (): WeatherAPIResponse => ({
  count: 1,
  data: [
    {
      city_name: 'Raleigh',
      state_code: 'NC',
      country_code: 'US',
      timezone: 'America/New_York',
      lat: 38,
      lon: -78.25,
      station: 'KRDU',
      sources: ['rtma'],
      vis: 10000,
      rh: 75,
      dewpt: 12,
      wind_dir: 125,
      wind_cdir: 'ENE',
      wind_cdir_full: 'East-North-East',
      wind_spd: 5.85,
      gust: 9,
      temp: 13.85,
      app_temp: 14.85,
      clouds: 42,
      weather: {
        icon: 'c02',
        code: 802,
        description: 'Broken clouds',
      },
      datetime: '2017-03-15:13',
      ob_time: '2017-03-15 13:11',
      ts: 1490990400,
      sunrise: '06:22',
      sunset: '19:34',
      slp: 1013.12,
      pres: 1010,
      aqi: 50,
      uv: 6.5,
      solar_rad: 300.4,
      ghi: 450.4,
      dni: 450.4,
      dhi: 450.4,
      elev_angle: 37,
      hour_angle: 45,
      pod: 'string',
      precip: 2,
      snow: 10,
    },
  ],
})
