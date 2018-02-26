<template>
  <section class="card">
    <header>{{ city.name }}, {{ city.sys.country }}</header>
    <main :style="temperatureColor">
      <span class="temperature">{{ temperature }}<span class="unit">º</span></span>
    </main>
    <footer>
      <WeatherDetail v-show="showDetails" name="Humidity" :value="city.main.humidity" unit="%" />
      <WeatherDetail v-show="showDetails" name="Pressure" :value="city.main.pressure" unit="hPa" />
      <section class="upated-time">Updated at <time>{{ city.dt | moment('hh:mm:ss A') }}</time></section>
    </footer>
  </section>
</template>

<script>
import WeatherDetail from '../weatherDetail/WeatherDetail'

export default {
  props: ['city', 'showDetails'],
  components: {
    WeatherDetail
  },
  computed: {
    temperature: function () {
      return Math.round(this.city.main.temp)
    },
    temperatureColor: function () {
      let color = '#69A3FF' // Blue
      if (this.temperature >= 25) {
        color = '#ED1946' // Red
      } else if (this.temperature >= 5) {
        color = '#FF9632' // Orange
      }
      return `color: ${color}`
    }
  }
}
</script>

<style scoped lang="sass">
@import './WeatherCard.scss'
</style>
