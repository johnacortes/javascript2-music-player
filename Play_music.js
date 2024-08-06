"user strict";

let play = document.getElementById("myAudio1");

let currentTimeDisplay = document.getElementById("currentTime");

let totalTime = document.getElementById("totalTime");

let barTime = document.getElementById("progress_container");

let progreso = document.getElementById("progress");

function activacion() {
  play.addEventListener("timeupdate", function () {
    let currentTime1 = play.currentTime;
    let duration = play.duration;

    let avance = (currentTime1 / duration) * 100;

    progreso.style.width = `${avance}%`;

    let currentMinutes = Math.floor(currentTime1 / 60);
    let currentSeconds = Math.floor(currentTime1 % 60);
    let totalMinutes = Math.floor(duration / 60);
    let totalSeconds = Math.floor(duration % 60);

    currentTimeDisplay.textContent =
      currentMinutes + ":" + (currentSeconds < 10 ? "0" : "") + currentSeconds;

    totalTime.textContent =
      totalMinutes + ":" + (totalSeconds < 10 ? "0" : "") + totalSeconds;

    barTime.value = (currentTime1 / duration) * 100;

    if (currentTime1 == duration) {
      adelantar();
    }
  });
}

function toggleAudio() {
  if (play.paused) {
    play.play();
    document.getElementById("svg-pause").classList.remove("display-none");
    document.getElementById("svg-play").classList.add("display-none");
  } else {
    play.pause();
    document.getElementById("svg-pause").classList.add("display-none");
    document.getElementById("svg-play").classList.remove("display-none");
  }
  activacion();
}

let contador = true;

function adelantar() {
  if (contador) {
    play.pause();
    document.getElementById("svg-pause").classList.remove("display-none");
    document.getElementById("svg-play").classList.add("display-none");
    barTime.value = 0;
    play = document.getElementById("myAudio2");
    play.currentTime = 0;
    activacion();
    document.getElementById("title1").innerHTML = "Forest Lullaby";
    document.getElementById("cantante1").innerHTML = "Lesfm";
    document.getElementById("container-imagen").style.backgroundImage =
      "url('cover-2.png')";
    play.play();
    contador = false;
  } else if (!contador) {
    play.pause();
    document.getElementById("svg-pause").classList.remove("display-none");
    document.getElementById("svg-play").classList.add("display-none");
    play = document.getElementById("myAudio1");
    play.currentTime = 0;
    activacion();
    barTime.value = 0;
    document.getElementById("title1").innerHTML = "Lost in the City Lights";
    document.getElementById("cantante1").innerHTML = "Cosmo Sheldrake";
    document.getElementById("container-imagen").style.backgroundImage =
      "url('cover-1.png')";
    play.play();
    contador = true;
  }
}

function regresar() {
  if (!contador) {
    play.pause();
    document.getElementById("svg-pause").classList.remove("display-none");
    document.getElementById("svg-play").classList.add("display-none");
    play = document.getElementById("myAudio1");
    play.currentTime = 0;
    activacion();
    barTime.value = 0;
    document.getElementById("title1").innerHTML = "Lost in the City Lights";
    document.getElementById("cantante1").innerHTML = "Cosmo Sheldrake";
    document.getElementById("container-imagen").style.backgroundImage =
      "url('cover-1.png')";
    play.play();
    contador = true;
  } else if (contador) {
    play.pause();
    document.getElementById("svg-pause").classList.remove("display-none");
    document.getElementById("svg-play").classList.add("display-none");
    barTime.value = 0;
    play = document.getElementById("myAudio2");
    play.currentTime = 0;
    activacion();
    document.getElementById("title1").innerHTML = "Forest Lullaby";
    document.getElementById("cantante1").innerHTML = "Lesfm";
    document.getElementById("container-imagen").style.backgroundImage =
      "url('cover-2.png')";
    play.play();
    contador = false;
  }
}

function setProgres(e) {
  let width = this.clientWidth;
  let clickPosition = e.offsetX;
  let duracion = play.duration;

  play.currentTime = (clickPosition / width) * duracion;
}

barTime.addEventListener("click", setProgres);
