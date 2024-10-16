<template>
  <div class="mt-6">
    <form @submit="(e) => submitAction(e)">
      <InputDefaultInput placeholder="Location" v-model="location" />
    </form>
    <div
      v-if="currentError || forecastError"
      class="bg-red-100 p-4 mt-4 rounded border border-red-500 text-red-500"
    >
      Error while retrieving weather data.
    </div>
    <div
      v-else-if="!currentWeather || !forecast"
      class="bg-blue-100 p-4 mt-4 rounded border border-blue-500 text-blue-500"
    >
      Please enter a city to get weather data.
    </div>
    <div
      v-else
      class="flex flex-col space-y-4 mt-4 md:grid md:grid-cols-2 md:gap-4 md:content-start md:space-y-0"
    >
      <Card class="">
        <div class="p-4">
          <h2 class="font-bold">Current weather</h2>
          <p>{{ currentWeather?.data.description ?? "-" }}</p>
          <ul>
            <li>
              Temperature:
              {{
                currentWeather?.data.temperature
                  ? Math.round(currentWeather.data.temperature)
                  : "-"
              }}°C
            </li>
            <li>
              Humidity:
              {{
                currentWeather?.data.humidity
                  ? currentWeather.data.humidity
                  : "-"
              }}%
            </li>
            <li>
              Wind speed:
              {{
                currentWeather?.data.wind_speed
                  ? Math.round(currentWeather.data.wind_speed)
                  : "-"
              }}
              Km/H
            </li>
          </ul>
        </div>
      </Card>
      <Card class="">
        <div class="p-4">
          <h2 class="font-bold">Forecast</h2>
          <p>This next 7 days: {{ forecast?.data.evolution ?? "-" }}</p>
          <ul>
            <li>Temperature: {{ forecast?.data.temperature ?? "-" }}</li>
            <li>Pressure: {{ forecast?.data.pressure ?? "-" }}</li>
            <li>
              Wind speed: {{ forecast?.data.wind_force_average ?? "-" }}/12
            </li>
          </ul>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const location = ref("");
const config = useRuntimeConfig();

interface CurrentWeatherAPIResponse {
  status: number;
  data: {
    description: string | undefined;
    temperature: number | undefined;
    humidity: number | undefined;
    wind_speed: number | undefined;
  };
}

interface ForecastAPIResponse {
  status: number;
  data: {
    evolution: string | undefined;
    temperature: string | undefined;
    pressure: string | undefined;
    wind_force_average: number | undefined;
  };
}

const {
  data: currentWeather,
  execute: currentExecute,
  error: currentError,
} = useFetch<CurrentWeatherAPIResponse>(`/weather/current`, {
  baseURL: config.public.apiBaseUrl,
  lazy: true,
  server: false,
  immediate: false,
  params: {
    location,
  },
  watch: false,
});

const {
  data: forecast,
  execute: forecastExecute,
  error: forecastError,
} = useFetch<ForecastAPIResponse>(`/weather/forecast`, {
  baseURL: config.public.apiBaseUrl,
  lazy: true,
  server: false,
  immediate: false,
  params: {
    location,
  },
  watch: false,
});

const submitAction = (event: Event | undefined = undefined): void => {
  if (event) {
    event.preventDefault();
  }
  if (!location.value) {
    currentWeather.value = null;
    forecast.value = null;
    return;
  }
  currentExecute();
  forecastExecute();
};
</script>
