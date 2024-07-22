function updateTime() {
  //For "Ciudad de Panama" real time data in (timezone - America/Panama):
  let timeZone = "America/Panama";
  let panamaFormatDate = moment().tz(timeZone).format("MMMM Do YYYY");
  let panamaCurrentDate = `Panamá 🇵🇦 - ${panamaFormatDate}`;
  let panamaCurrentTime = moment()
    .tz(timeZone)
    .format("h:mm:ss [<small>]A[</small>]");

  let panamaElement = document.querySelector("#panama");
  let panamaDateElement = panamaElement.querySelector(".date");
  let panamaTimeElement = panamaElement.querySelector(".time");

  panamaDateElement.innerHTML = panamaCurrentDate;
  panamaTimeElement.innerHTML = panamaCurrentTime;

  //For "Castellón de la Plana" real time data in (timezone - Europe/Madrid):

  //For "Oporto" real time data in (timezone - Portugal):
}

updateTime();
setInterval(updateTime, 1000);
