let minutosEl = document.getElementById("minutos");
let segundosEl = document.getElementById("segundos");
let millisegundosEl = document.getElementById("millisegundos");

let iniciarBtn = document.getElementById("iniciarBtn");
let pausarBtn = document.getElementById("pausarBtn");
let continuarBtn = document.getElementById("continuarBtn");
let resetarBtn = document.getElementById("resetarBtn");

let minutos = 0;
let segundos = 0;
let millisegundos = 0;
let pausado = false;
let interval;

iniciarBtn.addEventListener('click', iniciar);
pausarBtn.addEventListener('click', pausar);
continuarBtn.addEventListener('click', continuar);
resetarBtn.addEventListener('click', resetar);

function iniciar() {
    interval = setInterval(() => {
        if(!pausado) {
            millisegundos += 10;

            if(millisegundos === 1000) {
                segundos++;
                millisegundos = 0;
            };

            if(segundos === 60) {
                minutos++;
                segundos = 0;
            };

            minutosEl.textContent = formatoNumber(minutos);
            segundosEl.textContent = formatoNumber(segundos);
            millisegundosEl.textContent = formatoMillisegundos(millisegundos);
        };
    }, 10);

    iniciarBtn.style.display = "none";
    pausarBtn.style.display = "block";
};

function resetar() {
    clearInterval(interval);

    minutos = 0;
    segundos = 0;
    millisegundos = 0;

    minutosEl.textContent = "00";
    segundosEl.textContent = "00";
    millisegundosEl.textContent = "000";

    pausarBtn.style.display = "none";
    continuarBtn.style.display = "none";
    iniciarBtn.style.display = "block";

    pausado = false;
};

function continuar() {
    pausado = false;
    continuarBtn.style.display = "none";
    pausarBtn.style.display = "block";
};

function pausar() {
    pausado = true;
    pausarBtn.style.display = "none";
    continuarBtn.style.display = "block";
};

function formatoNumber(tempo) {
    return tempo < 10 ? `0${tempo}` : tempo;
};
function formatoMillisegundos(tempo) {
    return tempo < 100 ? `${tempo}`.padStart(3, "0") : tempo;
};