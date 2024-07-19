console.log("Hello world");

const totalAmount = document.getElementById("ttlamount");
const perSec = document.getElementById("pps");
const bigRed = document.getElementById("clicker");
const resetButt = document.getElementById("restart");
let ttlamount = 0;
const score = parseInt(localStorage.getItem("ttlamount"));

if (score) {
  ttlamount = score;
}

let pps = 1;

resetButt.addEventListener("click", restart);

function restart() {
  ttlamount;
}

function increaseAmount() {
  ttlamount += pps;
  totalAmount.textContent = ttlamount;
}

setInterval(increaseAmount, 1000);

function buttonClick() {
  ttlamount++;
  totalAmount.textContent = ttlamount;
  localStorage.setItem("ttlamount", ttlamount);
}

bigRed.addEventListener("click", buttonClick);

const counter = document.querySelector("ttlamount");

async function upgrades() {
  const response = await fetch(
    " https://cookie-upgrade-api.vercel.app/api/upgrades"
  );
  console.log("HTTP Response:", response);
  const json = await response.json();
  console.log("JSON Data:", json);
}

upgrades();
