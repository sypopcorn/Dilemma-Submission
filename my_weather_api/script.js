let weather = {
    fetchweather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=704fbd5742c30976e690e51e6ed1a4fd&units=metric")
            .then((Response) => Response.json())
            .then((data) => this.showweather(data));

    },
    showweather: function (data) {
        const { name } = data;
        const { temp, temp_min, temp_max, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".maxtemp").innerText = "Max-temp: " + temp_max + "°C";
        document.querySelector(".mintemp").innerText = "Min-temp: " + temp_min + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + "Km/hr";
    },
    search: function () {
        this.fetchweather(document.querySelector(".searchbar").value);
        document.querySelector(".searchbar").value = "";
    }
};

document.getElementById("searchb").addEventListener("click", function () {
    weather.search();
});
document
    .querySelector(".searchbar")
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });
weather.fetchweather("Roorkee");