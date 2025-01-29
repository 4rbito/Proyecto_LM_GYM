// Establecer tiempo restante (1 día desde ahora)
let countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

function updateTimer() {
    let now = new Date().getTime();
    let timeLeft = countdownDate - now;

    if (timeLeft < 0) {
        countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000); // Reinicia el tiempo si llega a 0
        timeLeft = countdownDate - now;
    }

    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

// Llamar a la función cada segundo
setInterval(updateTimer, 1000);

// Llamar inmediatamente para evitar el retraso inicial
updateTimer();
