
document.addEventListener("DOMContentLoaded", function () {
    const tablaForm = document.getElementById("tablaForm");
    const tablaResult = document.getElementById("tablaResult");

    tablaForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombresApellidos = document.getElementById("nombresApellidos").value;
        const coreElectronico = document.getElementById("coreElectronico").value;
        const edad = document.getElementById("edad").value;

        const tabla =   `Sus datos ingresados son:
                        Nombre:${nombresApellidos}
                        Correo:${coreElectronico}
                        Edad:${edad}.`;


        tablaResult.textContent = tabla;
    });
});
