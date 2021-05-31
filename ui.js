//Handle Ui of Weather App
class Ui {
  constructor() {
    this.icon = document.getElementById('w-icon');
    this.city = document.getElementById('w-city');
    this.feels = document.getElementById('w-feels');
    this.temperature = document.getElementById('w-temp');
    this.pressure = document.getElementById('w-pressure');
    this.humidity = document.getElementById('w-humidity');
  }
  // for rendering to ui
  paint({
    main_data: { temp, pressure, humidity },
    overall_data: { main, icon },
    cityName
  }) {
    const iconUrl = Ui.generateIcon(icon);
    this.icon.setAttribute('src', iconUrl);
    this.city.textContent = cityName;
    this.feels.textContent = main;
    this.temperature.textContent = ` Temperature(Cel): ${temp}`;
    this.pressure.textContent = ` pressure(hpa): ${pressure}`;
    this.humidity.textContent = `Humidity(%): ${humidity}`;
  }
  //Generating icon url
  static generateIcon(icon) {
    return 'http://openweathermap.org/img/w/' + icon + '.png';
  }
  //clear existing field after submission
  clearField() {
    document.getElementById('city').value = '';
    document.getElementById('country').value = '';
  }
  //constructing error message and insertion
  setMessage(msg) {
    const para = document.querySelector('.jumbotron p');
    const div = document.createElement('div');
    div.className = 'alert alert-danger';
    div.id = 'message';
    div.textContent = msg;
    Ui.hideMessage();
    para.insertAdjacentElement('afterend', div);
  }
  //hiding error message after a definite interval
  static hideMessage() {
    setTimeout(() => {
      document.getElementById('message').remove();
    }, 2000);
  }
}
