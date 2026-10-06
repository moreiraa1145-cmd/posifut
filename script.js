const boton = document.getElementById("boton");
const caracteristica = document.getElementById("caracteristica");
const posicion = document.getElementById("posicion");
const explicacion = document.getElementById("explicacion");

boton.addEventListener("click", function () {

    if (caracteristica.value === "rapido") {
        posicion.textContent = "Extremo ⚡";
        explicacion.textContent =
            "Tu velocidad puede ayudarte a superar rivales por las bandas y crear oportunidades de gol.";
    }

    else if (caracteristica.value === "pase") {
        posicion.textContent = "Mediocampista 🎯";
        explicacion.textContent =
            "Tu buen pase puede ayudarte a organizar el juego y crear oportunidades para tus compañeros.";
    }

    else if (caracteristica.value === "defensa") {
        posicion.textContent = "Defensa 🛡️";
        explicacion.textContent =
            "Tu habilidad para defender puede ayudarte a recuperar el balón y proteger tu arco.";
    }

    else if (caracteristica.value === "goles") {
        posicion.textContent = "Delantero ⚽";
        explicacion.textContent =
            "Tu gusto por marcar goles hace que jugar cerca del arco rival sea una buena opción.";
    }

    else {
        posicion.textContent = "Selecciona una opción";
        explicacion.textContent =
            "Debes elegir una característica antes de obtener una recomendación.";
    }

});