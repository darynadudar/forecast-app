<template>
  <main class="forecast">
    <div class="container">
      <div class="flex">
        <div>
          <p>{{ ipData.city }}</p>
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
import Axios from "axios";

import currentWeather from "./components/currentWeather/currentWeather.vue";

export default {
  name: 'App',
  components: {
    currentWeather,
  },
  data() {
    return {
      ipData: {
        default: {},
      }
    }
  },

  created() {
    this.getIpData();
  },

  methods: {
    getIpData() {
      Axios.get(`https://api.weatherapi.com/v1/ip.json?key=a32967cbc7c04d1d982213031223012&q=auto:ip`)
          .then(response => {
            this.ipData = response.data;
          })
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
