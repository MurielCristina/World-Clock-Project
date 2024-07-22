function updateTime() {
  //For "Ciudad de Panama" real time data in (timezone - America/Panama):
  let timeZoneOne = "America/Panama";
  let panamaFormatDate = moment().tz(timeZoneOne).format("MMMM Do YYYY");
  let panamaCurrentDate = `Panamá 🇵🇦 - ${panamaFormatDate}`;
  let panamaCurrentTime = moment()
    .tz(timeZoneOne)
    .format("h:mm:ss [<small>]A[</small>]");

  let panamaElement = document.querySelector("#panama");
  let panamaDateElement = panamaElement.querySelector(".date");
  let panamaTimeElement = panamaElement.querySelector(".time");

  panamaDateElement.innerHTML = panamaCurrentDate;
  panamaTimeElement.innerHTML = panamaCurrentTime;

  //For "Castellón de la Plana" real time data in (timezone - Europe/Madrid):
  let timeZoneTwo = "Europe/Madrid";
  let castellonFormatDate = moment().tz(timeZoneTwo).format("MMMM Do YYYY");
  let castellonCurrentDate = `España 🇪🇸 - ${castellonFormatDate}`;
  let castellonCurrentTime = moment()
    .tz(timeZoneTwo)
    .format("h:mm:ss [<small>]A[</small>]");

  let castellonElement = document.querySelector("#castellon");
  let castellonDateElement = castellonElement.querySelector(".date");
  let castellonTimeElement = castellonElement.querySelector(".time");

  castellonDateElement.innerHTML = castellonCurrentDate;
  castellonTimeElement.innerHTML = castellonCurrentTime;

  //For "Oporto" real time data in (timezone - Portugal):
  let timeZoneThree = "Portugal";
  let oportoFormatDate = moment().tz(timeZoneThree).format("MMMM Do YYYY");
  let oportoCurrentDate = `Portugal 🇵🇹 - ${oportoFormatDate}`;
  let oportoCurrentTime = moment()
    .tz(timeZoneThree)
    .format("h:mm:ss [<small>]A[</small>]");

  let oportoElement = document.querySelector("#oporto");
  let oportoDateElement = oportoElement.querySelector(".date");
  let oportoTimeElement = oportoElement.querySelector(".time");

  oportoDateElement.innerHTML = oportoCurrentDate;
  oportoTimeElement.innerHTML = oportoCurrentTime;
}

updateTime();
setInterval(updateTime, 1000);

//For "Pueblo Viejo" real time data in (timezone - America/Dominica):
//For "Arizona" real time data in (timezone - US/Arizona):
//For "Montreal" (Toronto, Montreal, Quebec City and Ottawa) real time data in (timezone - America/Montreal):
//For "México (Sonora, Hermosillo)" real time data in (timezone - America/Hermosillo):
//For "México (Monterrey, Guerrero, Torreón, Chihuahua)" real time data in (timezone - America/Monterrey):
