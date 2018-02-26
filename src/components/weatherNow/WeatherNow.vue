<template>
  <section class="app">
    <header><img src="../../assets/logo.svg"></header>
    <main>
      <ul class="citiesList">
        <li v-for="(cityData, cardIndex) in citiesData.list" :key="cityData.id" :cardSelected="cardSelected(cardIndex)">
          <WeatherCard :city="cityData" :showDetails="cardSelected(cardIndex)" />
        </li>
      </ul>
      <div id ="loading" :showLoading="showLoading"></div>
    </main>
  </section>
</template>

<script>
import WeatherCard from '../shared/weatherCard/WeatherCard'

const refreshTimeInMs = 10 * 60 * 1000
const params = { id: '3445709,3421319,184745', units: 'metric', APPID: 'dc685e532a6de9e74b4f56d656ec8a01' }
const localStorageKey = JSON.stringify(params)

export default {
  components: {
    WeatherCard
  },
  data () {
    return {
      citiesData: {},
      selectedCardIndex: 0,
      showLoading: false
    }
  },
  created () {
    this.loadWeatherData()
  },
  methods: {
    cardSelected (cardIndex) {
      return cardIndex === this.selectedCardIndex
    },
    loadWeatherData () {
      let savedData = window.localStorage.getItem(localStorageKey)
      let citiesData = savedData && JSON.parse(savedData)

      if (citiesData && citiesData.loadTime > new Date() - refreshTimeInMs) {
        this.citiesData = citiesData
        this.refreshWhenExpire()
      } else {
        this.loadWeatherDataFromAPI()
      }
    },
    loadWeatherDataFromAPI () {
      this.showLoading = true
      this.$http.get('http://api.openweathermap.org/data/2.5/group', { params })
        .then(response => response.json())
        .then(citiesData => {
          this.citiesData = citiesData
          this.showLoading = false
          citiesData.loadTime = +new Date()
          window.localStorage.setItem(localStorageKey, JSON.stringify(citiesData))
          this.refreshWhenExpire()
        }, err => console.log(err))
    },
    refreshWhenExpire () {
      let timeToExpire = refreshTimeInMs - (new Date() - this.citiesData.loadTime)
      window.setTimeout(this.loadWeatherData, timeToExpire)
    }
  }
}
</script>

<style scoped lang="sass">
@import './WeatherNow.scss'
</style>
