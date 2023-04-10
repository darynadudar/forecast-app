<template>
  <main class="forecast">
    <div class="container">
      <div class="flex">
        <div>
          <p>{{ weatherStore.ipData.city }}</p>
          <div class="forecast__current-weather">
            <CurrentWeather
                v-if="forecastData"
                :currentWeather="forecastData.current"
                :todayForecast="todayForecastData"
                :location="forecastData.location"
            />
          </div>
          <HourlyForecast
              v-if="forecastData"
              :hourlyWeather="hourlyForecastData"
              :location="forecastData.location"
          />
        </div>
        <aside>
<!--          <dailyForecast />-->
        </aside>
      </div>
    </div>
  </main>
</template>

<script>
import { useWeatherStore } from './stores/weatherStore';

import CurrentWeather from "./components/currentWeather/currentWeather.vue";
import HourlyForecast from "./components/hourlyForecast/hourlyForecast.vue";

export default {
  name: 'App',
  components: {
    HourlyForecast,
    CurrentWeather,
  },
  setup() {
    const weatherStore = useWeatherStore();

    return {
      weatherStore
    }
  },

  data() {
    return {

    }
  },
  created() {
    this.weatherStore.getIpData();
    this.weatherStore.getForecastData();
  },
  computed: {
    forecastData() {
      return this.weatherStore.forecastData;
    },
    todayForecastData() {
      return this.weatherStore.todayForecastData;
    },
    hourlyForecastData() {
      return this.weatherStore.hourlyForecastData;
    },
  },
}

</script>

<style lang="scss">
@import './styles/style.scss';

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.forecast {
  background-color: #F2DAC4;
  //background-color: #BF4E24;
  height: 100vh;

  &__current-weather {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .flex {
    display: flex;
  }
}

</style>
