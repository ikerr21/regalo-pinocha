// ===============================
// VARIABLES
// ===============================

let pantallaActual = 1;
let indiceCarrusel = 0;

// ===============================
// CARGAR DATOS
// ===============================

window.onload = function () {

    // Pantalla 1
    document.getElementById("tituloPrincipal").textContent = datos.tituloPrincipal;
    document.getElementById("subtituloPrincipal").textContent = datos.subtituloPrincipal;

    // Pantalla 2
    document.getElementById("titulo2").textContent = datos.pantalla2.titulo;
    document.getElementById("foto2").src = datos.pantalla2.foto;
    document.getElementById("texto2").textContent = datos.pantalla2.texto;

    // Pantalla 3
    document.getElementById("titulo3").textContent = datos.pantalla3.titulo;
    document.getElementById("foto3").src = datos.pantalla3.foto;
    document.getElementById("texto3").textContent = datos.pantalla3.texto;

    // Pantalla 4
    document.getElementById("titulo4").textContent = datos.pantalla4.titulo;
    document.getElementById("foto4").src = datos.pantalla4.foto;
    document.getElementById("texto4").textContent = datos.pantalla4.texto;

    // Carrusel
    actualizarCarrusel();
    setInterval(siguienteFotoCarrusel, 4000);

    // Frases
    cargarFrases();

    // Carta
    document.getElementById("carta").innerText = datos.carta;

    // Final
    document.getElementById("mensajeFinal").textContent = datos.mensajeFinal;

    // Corazones
    crearCorazones();

};

// ===============================
// CAMBIAR PANTALLA
// ===============================

function nextScreen() {

    if (pantallaActual >= 8) return;

    document
        .getElementById("screen" + pantallaActual)
        .classList.remove("active");

    pantallaActual++;

    document
        .getElementById("screen" + pantallaActual)
        .classList.add("active");

}

// ===============================
// CARRUSEL
// ===============================

function actualizarCarrusel() {

    document.getElementById("carouselImage").src =
        datos.carrusel[indiceCarrusel].foto;

    document.getElementById("carouselText").textContent =
        datos.carrusel[indiceCarrusel].texto;

}

function siguienteFotoCarrusel() {

    indiceCarrusel++;

    if (indiceCarrusel >= datos.carrusel.length) {

        indiceCarrusel = 0;

    }

    actualizarCarrusel();

}

// ===============================
// FRASES
// ===============================

function cargarFrases() {

    const contenedor = document.getElementById("frases");

    contenedor.innerHTML = "";

    datos.frases.forEach(frase => {

        const p = document.createElement("p");

        p.innerHTML = "❤️ " + frase;

        contenedor.appendChild(p);

    });

}

// ===============================
// CORAZONES
// ===============================

function crearCorazones() {

    const fondo = document.getElementById("hearts");

    setInterval(() => {

        const corazon = document.createElement("div");

        corazon.innerHTML = "❤️";

        corazon.style.position = "absolute";

        corazon.style.left = Math.random() * window.innerWidth + "px";

        corazon.style.top = window.innerHeight + "px";

        corazon.style.fontSize = (15 + Math.random() * 20) + "px";

        corazon.style.opacity = "0.8";

        corazon.style.transition = "transform 8s linear, opacity 8s linear";

        fondo.appendChild(corazon);

        setTimeout(() => {

            corazon.style.transform = "translateY(-110vh)";

            corazon.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            corazon.remove();

        }, 8000);

    }, 700);

}