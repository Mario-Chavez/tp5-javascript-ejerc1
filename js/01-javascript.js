/* 
1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego,
 en ese momento se crea un número aleatorio que el usuario deberá adivinar,
la interfaz del usuario debe tener además un input para ingresar un número 
y un botón enviar, al presionar el botón enviar mostrar en un alert si el 
usuario adivino o no el número mágico, si no lo adivino indicarle con un 
alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario
que adivino el numero.

*/

let numRandon = 0;
let btnComenzar = document.getElementById("comenzarJuego");
btnComenzar.addEventListener("click", mostrarInput);

// minimo de 1 a 50
function getRandomNumber() {
    numRandon = Math.floor(Math.random() * (50 - 1) + 1);
}

function mostrarInput() {
    let seccionPrincipal = document.getElementById("seccion-principal");

    if (btnComenzar.innerHTML === "salir") {
        btnComenzar.innerHTML = "Comenzar el juego";
        btnComenzar.className = "btn btn-primary";
        seccionPrincipal.removeChild(seccionPrincipal.children[3]);
        alert(`te diste por vencido el numero era ${numRandon}`);
    } else {
        getRandomNumber();
        let div = document.createElement("div");
        div.innerHTML = `
         <form id="formulario">
            <div class="mb-3">
                <label for="" class="form-label">Ingrese Numero</label>
                <input
                    type="number"
                    class="form-control inputNumber"
                    placeholder="numero de 1 a 50"
                    required
                />
                <button type="submit" class="btn btn-primary">Enviar</button>
            </div>
    </form>`;
        seccionPrincipal.appendChild(div);
        let formulario = document.getElementById("formulario");
        formulario.addEventListener("submit", adivinar);

        // resetear el botton
        btnComenzar.innerHTML = "salir";
        btnComenzar.className = "btn btn-danger";
    }
}

function adivinar(e) {
    e.preventDefault();
    let input = document.querySelector(".inputNumber");
    let dato = parseInt(input.value);
    input.value = "";
    if (dato == numRandon) {
        alert(`Felicidades adivinaste el numero que era . ${numRandon}`);
        window.location.reload();
    } else if (dato > 50) {
        alert("tu numero debe ser entre 1 a 50");
    } else if (dato > numRandon) {
        alert("tu numero es mayor");
    } else {
        alert("tu numero es menor");
    }
}
