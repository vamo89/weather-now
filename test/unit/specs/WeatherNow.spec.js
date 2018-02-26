import WeatherNow from '@/components/weatherNow/WeatherNow'

/* Tests */

describe('WeatherNow', () => {
  it('should have created hook', () => {
    expect(typeof WeatherNow.created).toBe('function')
  })

  // TODO: mock window.localStorage and window.setTimeout to make more tests
})
