const loader = document.getElementById("loader");

const btn = document.getElementById("continue");
const hero = document.getElementById("hero");
const countdown = document.getElementById("countdown");
const invite = document.getElementById("invite");

const engine = document.getElementById("engine");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

const confirmButton = document.getElementById("confirmButton");
const confirmMessage = document.getElementById("confirmMessage");


// ---------------- LOADER ----------------

setTimeout(() => {

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

        const panel = document.getElementById("startLights");
        const lights = document.querySelectorAll(".light");

        panel.style.display = "flex";

        let i = 0;

        const interval = setInterval(() => {

            lights[i].classList.add("active");

            i++;

            if (i === 5) {

                clearInterval(interval);

                setTimeout(() => {

                panel.style.display = "none";

// Primero aparece el contador
                countdown.style.display = "flex";
                }, 800);

            }

        }, 500);

    }, 1000);

}, 4000);


// ---------------- BOTÓN CONTINUAR ----------------

btn.addEventListener("click", () => {

    if (engine) engine.play();

    setTimeout(() => {

        if (music) music.play();

    }, 2500);

    hero.style.display = "none";
    invite.style.display = "flex";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ---------------- CUENTA REGRESIVA ----------------

const birthday = new Date("July 27, 2026 00:01:00").getTime();

const counter = setInterval(() => {

    const now = new Date().getTime();
    const distance = birthday - now;

    const days = document.getElementById("days");
    const hours = document.getElementById("hours");
    const minutes = document.getElementById("minutes");
    const seconds = document.getElementById("seconds");
if (distance <= 0) {

    clearInterval(counter);

    days.textContent = "00";
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";

    countdown.style.display = "none";

    hero.style.display = "flex";

    return;

}

    days.textContent = Math.floor(distance / (1000 * 60 * 60 * 24));

    hours.textContent = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    minutes.textContent = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );

    seconds.textContent = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

}, 1000);


// ---------------- PARTÍCULAS ----------------

const particles = document.getElementById("particles");

for (let i = 0; i < 120; i++) {

    const p = document.createElement("div");

    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";

    p.style.animationDuration = (10 + Math.random() * 15) + "s";

    p.style.animationDelay = (Math.random() * 15) + "s";

    particles.appendChild(p);

}


// ---------------- MÚSICA ----------------

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.innerHTML = "🔇 Pausar Música";

    } else {

        music.pause();

        musicButton.innerHTML = "🎵 Música";

    }

});


// ---------------- EFECTO PARALLAX ----------------

document.addEventListener("mousemove", (e) => {

    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * 10;

    hero.style.backgroundPosition =
        `calc(50% + ${x}px) calc(50% + ${y}px)`;

});


// ---------------- CONFIRMAR ASISTENCIA ----------------

confirmButton.addEventListener("click", () => {

    confirmMessage.innerHTML = "✅ ¡TE ESPERAMOS!";

    confirmMessage.style.opacity = "1";

    confirmButton.disabled = true;

    confirmButton.innerHTML = "✔ Asistencia Confirmada";

});