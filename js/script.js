const API_KEY = `46235fe5ab867ce59610f0e739431999`;

const LoadTemperature = (city) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(URL)
        .then(response => response.json())
        .then(data => DisplayTemperature(data));
}

const DisplayTemperature = (data) => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main);
}

const setInnerTextById = (id, text) => {
    const Temperature = document.getElementById(id);
    Temperature.innerText = text;
}

document.getElementById('search-input').addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      document.getElementById("search-button").click();
    }
  });

document.getElementById('search-button').addEventListener('click', function () {
    const SearchField = document.getElementById('search-input');
    const city = SearchField.value;
    SearchField.value = '';
    if (city === '') {
        alert('enter city name');
    }
    else {     
        document.getElementById('city-name').innerText = city;
        LoadTemperature(city);
    }
})

LoadTemperature();