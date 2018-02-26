# weather-now

> Show how is the weather in some places in the world

This is a small project, using mainly vue.js, webpack, sass and jest.
It reads data from [OpenWeatherMap](https://openweathermap.org).

## Build Setup

Use nodejs 6 or higher

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit
```

## Instructions

Click in the card to select the city.

### Improvements
- More test coverage
- More cities
- Filter cities
- More info on cards
- Use cache (with header max-age) instead of localStorage
- Handle API error with message to user. Mainly when it's the first load.
