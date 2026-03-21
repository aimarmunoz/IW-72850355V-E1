const camposObligatorios = ["nombre", "email", "plantas", "fecha", "tipo"];

function detectorids(id) {
    const valor = document.getElementById(id).value;
    if (valor === "" || valor === "seleccion") {
        return true;
    } else {
        return false;
    }
}

function formularionook() {
    let hayErrores = false;
    for (let i = 0; i < camposObligatorios.length; i++) {
        if (detectorids(camposObligatorios[i])) {
            hayErrores = true;
        }
    }
    return !hayErrores;
}

function mostrarmensaje(texto, tipo) {
    let mensaje = document.getElementById("mensaje-resultado");
    mensaje.textContent = texto;
    mensaje.style.display = "block";
    if (tipo === "error") {
        mensaje.style.color = "#ff0000";
    } else {
        mensaje.style.color = "#007d00";
    }
}

document.getElementById("btn-enviar").addEventListener("click", function () {

    if (formularionook()) {
        mostrarmensaje("Solicitud enviada correctamente. Nos pondremos en contacto contigo pronto.", "ok");
    } else {
        mostrarmensaje("Por favor, rellena todos los campos obligatorios.", "error");
    }
});

const radios = document.querySelectorAll("input[name='presupuesto']");

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function (event) {

        const aviso = document.getElementById("aviso-presupuesto");

        const valorSeleccionado = event.currentTarget.value;

        if (valorSeleccionado === "menos50k") {
            aviso.textContent = "Para proyectos de este tamaño se recomienda el Plan Basico.";
        } else if (valorSeleccionado === "50-150k") {
            aviso.textContent = "Para proyectos de este tamaño se recomienda el Plan Avanzado.";
        } else {
            aviso.textContent = "Para proyectos de este tamaño se te asignara un ingeniero dedicado.";
        }
        aviso.style.display = "block";
    });
}