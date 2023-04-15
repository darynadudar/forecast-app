<template>
  <section class="hourly-forecast" v-if="hourlyWeather">
    <div
        v-for="item in hourlyForecastFiltered"
        :key="item.time"
    >
      <p>
        {{ item.time.split(' ')[1] }}
      </p>
      <p>
        {{item.condition.text}}
      </p>
<!--      <img :src="'https:' + item.condition.icon" :alt="item.condition.text">-->
      <p>
        {{ Math.round(item.temp_c) }}&#176;
      </p>
    </div>
  </section>
</template>

<script>

export default {
  name: "hourlyForecast",
  props: {
    hourlyWeather: {
      default: [],
    },
    location: null,
  },
  computed: {
    hourlyForecastFiltered() {
      return this.hourlyWeather.length ? this.hourlyWeather.filter((item, index) => !(index % 3)) : [];
    }
  }
}
</script>

<style scoped lang="scss">
.hourly-forecast {
  display: flex;
  justify-content: space-between;
}
</style>