//ApI url
//https://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=9308bd4d586fa330d2bec47124b8a759&units=metric

//Handle weather related data and fetching data from API
class Weather {
  constructor(city, country) {
    this.city = city;
    this.country = country;
    this.APPId = '9308bd4d586fa330d2bec47124b8a759';
  }
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.country
      }&appid=${this.APPId}&units=metric`
    );
    const responseData = await response.json();
    return {
      main_data: responseData.main,
      overall_data: responseData.weather[0],
      cityName: responseData.name
    };
  }
  changLocation(city, country) {
    this.city = city;
    this.country = country;
  }
}
