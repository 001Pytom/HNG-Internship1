const currentDate = new Date();

function update() {
  const currentDay = currentDate.toLocaleString(undefined, { weekday: "long" });
  document.getElementById("currentDay").textContent = currentDay;

  const currentUTCTime = currentDate.getTime();
  document.getElementById("currentTime").textContent = currentUTCTime;
}

window.addEventListener("load", update);

setInterval(update, 1000);
