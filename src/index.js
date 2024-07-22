//Panama
let panamaFormatDate = moment().tz("America/Panama").format("MMMM Do YYYY");
let panamaCurrentDate = `Panamá 🇵🇦 - ${panamaFormatDate}`;
let panamaCurrentTime = moment().tz("America/Panama").format("h:mm:ss");
let panamaCurrentTimeAMPM = moment().tz("America/Panama").format(" A");

let panamaElement = document.querySelector("#panama");
let panamaDateElement = panamaElement.querySelector(".date");
let panamaTimeElement = panamaElement.querySelector(".time");
panamaDateElement.innerHTML = panamaCurrentDate;
panamaTimeElement.innerHTML = `${panamaCurrentTime} <small>${panamaCurrentTimeAMPM}</small>`;
