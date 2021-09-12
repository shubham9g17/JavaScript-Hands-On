const weather = (function getWeather(temp) {
  switch (true) {
    case temp < 0:
      return "freezing";
    case temp < 10:
      return "cold";
    case temp < 24:
      return "cool";
    default:
      return "unknown";
  }
})(10);
console.log(weather);
