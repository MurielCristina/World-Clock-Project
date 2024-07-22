function updateTime() {
  //For "Ciudad de Panama" real time data in (timezone - America/Panama):
  let panamaElement = document.querySelector("#panama");
  if (panamaElement) {
    let timeZoneOne = "America/Panama";
    let panamaFormatDate = moment().tz(timeZoneOne).format("MMMM Do YYYY");
    let panamaCurrentDate = `Panamá 🇵🇦 - ${panamaFormatDate}`;
    let panamaCurrentTime = moment()
      .tz(timeZoneOne)
      .format("h:mm:ss [<small>]A[</small>]");

    let panamaDateElement = panamaElement.querySelector(".date");
    let panamaTimeElement = panamaElement.querySelector(".time");

    panamaDateElement.innerHTML = panamaCurrentDate;
    panamaTimeElement.innerHTML = panamaCurrentTime;
  }

  //For "Castellón de la Plana" real time data in (timezone - Europe/Madrid):
  let castellonElement = document.querySelector("#castellon");
  if (castellonElement) {
    let timeZoneTwo = "Europe/Madrid";
    let castellonFormatDate = moment().tz(timeZoneTwo).format("MMMM Do YYYY");
    let castellonCurrentDate = `España 🇪🇸 - ${castellonFormatDate}`;
    let castellonCurrentTime = moment()
      .tz(timeZoneTwo)
      .format("h:mm:ss [<small>]A[</small>]");

    let castellonDateElement = castellonElement.querySelector(".date");
    let castellonTimeElement = castellonElement.querySelector(".time");

    castellonDateElement.innerHTML = castellonCurrentDate;
    castellonTimeElement.innerHTML = castellonCurrentTime;
  }

  //For "Oporto" real time data in (timezone - Portugal):
  let oportoElement = document.querySelector("#oporto");
  if (oportoElement) {
    let timeZoneThree = "Portugal";
    let oportoFormatDate = moment().tz(timeZoneThree).format("MMMM Do YYYY");
    let oportoCurrentDate = `Portugal 🇵🇹 - ${oportoFormatDate}`;
    let oportoCurrentTime = moment()
      .tz(timeZoneThree)
      .format("h:mm:ss [<small>]A[</small>]");

    let oportoDateElement = oportoElement.querySelector(".date");
    let oportoTimeElement = oportoElement.querySelector(".time");

    oportoDateElement.innerHTML = oportoCurrentDate;
    oportoTimeElement.innerHTML = oportoCurrentTime;
  }

  //For "Pueblo Viejo" real time data in (timezone - America/Dominica):
  //For "Arizona" real time data in (timezone - US/Arizona):
  //For "Montreal" (Toronto, Montreal, Quebec City and Ottawa) real time data in (timezone - America/Montreal):
  //For "México (Sonora, Hermosillo)" real time data in (timezone - America/Hermosillo):
  //For "México (Monterrey, Guerrero, Torreón, Chihuahua)" real time data in (timezone - America/Monterrey):
  //For "México (Monterrey, Guerrero, Torreón, Chihuahua)" real time data in (timezone - America/Monterrey):

  function updateCity(event) {
    let cityTimeZoneValue = event.target.value;
    if (cityTimeZoneValue === "current") {
      cityTimeZoneValue = moment.tz.guess();
    }
    let cityName = cityTimeZoneValue.replace("_", " ").split("/")[1];

    let cityFormatDate = moment().tz(cityTimeZoneValue).format("MMMM Do YYYY");
    let cityCurrentDate = `${cityFormatDate}`;

    let cityCurrentTime = moment()
      .tz(cityTimeZoneValue)
      .format("h:mm [<small>]A[</small>]");
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
        <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityCurrentDate}</div>
          </div>
          <div class="time">${cityCurrentTime}</div>
        </div>
  `;
  }

  let selectCityElement = document.querySelector("#city_drop_down");
  selectCityElement.addEventListener("change", updateCity);
}

updateTime();
setInterval(updateTime, 1000);
