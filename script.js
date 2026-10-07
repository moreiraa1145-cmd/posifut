const boton = document.getElementById("boton");
const reiniciar = document.getElementById("reiniciar");

const posicion = document.getElementById("posicion");
const explicacion = document.getElementById("explicacion");


// BOTÓN PARA DESCUBRIR LA POSICIÓN
boton.addEventListener("click", function () {

    // Obtener las respuestas
    const respuesta1 = document.getElementById("pregunta1").value;
    const respuesta2 = document.getElementById("pregunta2").value;
    const respuesta3 = document.getElementById("pregunta3").value;
    const respuesta4 = document.getElementById("pregunta4").value;


    // Comprobar que todas las preguntas estén respondidas
    if (
        respuesta1 === "" ||
        respuesta2 === "" ||
        respuesta3 === "" ||
        respuesta4 === ""
    ) {
        posicion.textContent = "Faltan respuestas ⚠️";

        explicacion.textContent =
            "Responde las cuatro preguntas antes de descubrir tu posición.";

        return;
    }


    // Puntos iniciales de cada posición
    let puntosExtremo = 0;
    let puntosMedio = 0;
    let puntosDefensa = 0;
    let puntosDelantero = 0;


    // Guardar todas las respuestas
    const respuestas = [
        respuesta1,
        respuesta2,
        respuesta3,
        respuesta4
    ];


    // Sumar puntos
    for (let respuesta of respuestas) {

        if (respuesta === "extremo") {
            puntosExtremo++;
        }

        else if (respuesta === "medio") {
            puntosMedio++;
        }

        else if (respuesta === "defensa") {
            puntosDefensa++;
        }

        else if (respuesta === "delantero") {
            puntosDelantero++;
        }
    }


    // Encontrar el puntaje más alto
    const mayorPuntaje = Math.max(
        puntosExtremo,
        puntosMedio,
        puntosDefensa,
        puntosDelantero
    );


    // Guardar las posiciones que tengan el puntaje más alto
    let posicionesGanadoras = [];

    if (puntosExtremo === mayorPuntaje) {
        posicionesGanadoras.push("Extremo ⚡");
    }

    if (puntosMedio === mayorPuntaje) {
        posicionesGanadoras.push("Mediocampista 🎯");
    }

    if (puntosDefensa === mayorPuntaje) {
        posicionesGanadoras.push("Defensa 🛡️");
    }

    if (puntosDelantero === mayorPuntaje) {
        posicionesGanadoras.push("Delantero ⚽");
    }


    // Si hay empate entre dos o más posiciones
    if (posicionesGanadoras.length > 1) {

        posicion.textContent =
            "Perfil mixto: " + posicionesGanadoras.join(" / ");

        explicacion.textContent =
            "Tus respuestas muestran características de varias posiciones. Puedes probar estas posiciones y descubrir cuál se adapta mejor a tu estilo de juego.";
    }


    // Si solo hay una posición ganadora
    else {

        if (puntosExtremo === mayorPuntaje) {

            posicion.textContent = "Extremo ⚡";

            explicacion.textContent =
                "Tu estilo destaca por la velocidad y el juego por las bandas. Puedes generar peligro superando rivales y creando oportunidades.";
        }

        else if (puntosMedio === mayorPuntaje) {

            posicion.textContent = "Mediocampista 🎯";

            explicacion.textContent =
                "Tu estilo destaca por el pase y la creación de jugadas. Puedes ayudar a organizar el juego y conectar al equipo.";
        }

        else if (puntosDefensa === mayorPuntaje) {

            posicion.textContent = "Defensa 🛡️";

            explicacion.textContent =
                "Tu estilo destaca por recuperar balones y proteger tu arco. Puedes aportar seguridad y detener los ataques rivales.";
        }

        else if (puntosDelantero === mayorPuntaje) {

            posicion.textContent = "Delantero ⚽";

            explicacion.textContent =
                "Tu estilo destaca por buscar el arco rival y generar oportunidades de gol. Puedes ser importante en la zona ofensiva.";
        }
    }

});


// BOTÓN PARA REINICIAR EL TEST
reiniciar.addEventListener("click", function () {

    document.getElementById("pregunta1").value = "";
    document.getElementById("pregunta2").value = "";
    document.getElementById("pregunta3").value = "";
    document.getElementById("pregunta4").value = "";

    posicion.textContent = "Tu resultado aparecerá aquí";

    explicacion.textContent =
        "Completa las cuatro preguntas para recibir una recomendación.";

});