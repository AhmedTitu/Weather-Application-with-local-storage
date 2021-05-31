//Instantiate Store
const store = new Store();
//Instantiate Ui class
const ui = new Ui();

//destructuring object to get city and country
const { city, country } = store.getLocation();
//Instantiate Weather class
const weather = new Weather(city, country);

//Flushing weather data on UI after dom content is being loaded
document.addEventListener('DOMContentLoaded', weatherData);

//Handling submit event
document.getElementById('w-form').addEventListener('submit', e => {
  //prevent default submit action(reloading browser)
  e.preventDefault();
  //Getting value from city field
  const city = document.getElementById('city').value;
  //Getting value from country field
  const country = document.getElementById('country').value;
  //checking some validation if city and country value not provided
  if (city === '' || country === '') {
    ui.setMessage('please provide necessary information');
  } else {
    //changing location
    weather.changLocation(city, country);
    //setting new location to localStorage
    store.setLocation(city, country);
    //clearing form field
    ui.clearField();
    weatherData();
  }
});

function weatherData() {
  weather
    .getWeather()
    .then(data => {
      //showing data to UI
      ui.paint(data);
    })
    .catch(() => ui.setMessage('your city is not found'));
}
