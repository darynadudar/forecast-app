<template>
  <section class="current-weather">
    <div class="current-weather__temperature">
      <p v-if="currentWeather && currentWeather.temp_c">
        {{ Math.round(currentWeather.temp_c) }}&#176;
      </p>
    </div>
    <div class="current-weather__details">
      <div class="current-weather__date">
        <p v-if="location" class="current-weather__date-time">
          {{ location.localtime.split(' ')[1] }}
        </p>
        <p class="current-weather__date-day">
          {{ dayOfWeek }}
        </p>
        <div>
          <span title="Wind speed"> Wind speed </span>
          <span title="Pressure"> Pressure </span>
          <span title="Chance of rain"> Chance of rain </span>
        </div>
      </div>
      <div>

      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: "currentWeather",
  props: {
    currentWeather: null,
    todayForecast: null,
    location: null,
  },
  data() {
    return {
      dayOfWeek: '',
    }
  },
  mounted() {
    this.getDate();
  },
  methods: {
    getDate() {
      this.dayOfWeek = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
      });
    }
  }
}
</script>

<style scoped lang="scss">
.current-weather {
  display: flex;
  gap: 32px;

  &__temperature {
    font-family: 'Limelight', cursive;
    font-size: 144px;
    line-height: 1em;
  }

  &__date-day {
    font-size: 36px;
    font-weight: 600;
  }
}
</style>