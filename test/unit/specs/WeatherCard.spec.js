import Vue from 'vue'
import WeatherCard from '@/components/shared/weatherCard/WeatherCard'

// Using real vue-moment
import VueMoment from 'vue-moment'
Vue.use(VueMoment)

/* Helpers */

function propsData ({ temp = 0, name = '', country = '', dt = +new Date(), humidity = 0, pressure = 0 } = {}) {
  return { city: { main: { temp, humidity, pressure }, sys: { country }, name, dt } }
}

function getMountedComponent (Component, propsData) {
  const Constructor = Vue.extend(Component)
  return new Constructor({ propsData: propsData }).$mount()
}

/* Constants */

const blue = 'color: #69A3FF'
const orange = 'color: #FF9632'
const red = 'color: #ED1946'

/* Tests */

describe('WeatherCard', () => {
  describe('screen value', () => {
    it('text to be printed', () => {
      let weatherCardObj = getMountedComponent(WeatherCard,
        propsData({
          temp: 2,
          name: 'cityname',
          country: 'countryname',
          dt: 1519606593523,
          humidity: 3,
          pressure: 4
        }))
      expect(weatherCardObj.$el.textContent).toBe('cityname, countryname 2º Humidity 3% Pressure 4hPa Updated at 03:38:43 AM')
    })
  })

  describe('computed functions', () => {
    it('should round temperature value down', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 3.2 }))
      expect(weatherCardObj.temperature).toBe(3)
    })

    it('should round temperature value up', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 3.6 }))
      expect(weatherCardObj.temperature).toBe(4)
    })

    it('should be blue with negative temperatures', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: -12.1 }))
      expect(weatherCardObj.temperatureColor).toBe(blue)
    })

    it('should be blue with high negative temperatures', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: -50 }))
      expect(weatherCardObj.temperatureColor).toBe(blue)
    })

    it('should be blue with temperature 0', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 0 }))
      expect(weatherCardObj.temperatureColor).toBe(blue)
    })

    it('should be blue with temperature 4.49', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 4.49 }))
      expect(weatherCardObj.temperatureColor).toBe(blue)
    })

    it('should be orange with temperature 5', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 5 }))
      expect(weatherCardObj.temperatureColor).toBe(orange)
    })

    it('should be orange with temperature 24.49', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 24.49 }))
      expect(weatherCardObj.temperatureColor).toBe(orange)
    })

    it('should be red with temperature 25', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 25 }))
      expect(weatherCardObj.temperatureColor).toBe(red)
    })

    it('should be red with high temperature', () => {
      let weatherCardObj = getMountedComponent(WeatherCard, propsData({ temp: 100 }))
      expect(weatherCardObj.temperatureColor).toBe(red)
    })
  })
})
