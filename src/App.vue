<template>
  <main class="forecast">
    <div class="container">
      <div class="flex">
        <div>
          <p>{{ weatherStore.ipData.city }}</p>
          <div class="forecast__current-weather">
          </div>
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

import currentWeather from "./components/currentWeather/currentWeather.vue";

export default {
  name: 'App',
  components: {
    currentWeather,
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
