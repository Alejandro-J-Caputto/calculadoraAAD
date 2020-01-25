let memoria
let valorBoton
let pantalla
let operacion
document.querySelector("#cero").addEventListener("click", function() {
    numeros(document.getElementById("cero").value);
});

document.querySelector("#uno").addEventListener("click", function() {
    numeros(document.getElementById("uno").value);
});

document.querySelector("#dos").addEventListener("click", function() {
    numeros(document.getElementById("dos").value);
});

document.querySelector("#tres").addEventListener("click", function() {
    numeros(document.getElementById("tres").value);
});

document.querySelector("#cuatro").addEventListener("click", function() {
    numeros(document.getElementById("cuatro").value);
});

document.querySelector("#cinco").addEventListener("click", function() {
    numeros(document.getElementById("cinco").value);
});

document.querySelector("#seis").addEventListener("click", function() {
    numeros(document.getElementById("seis").value);
});

document.querySelector("#siete").addEventListener("click", function() {
    numeros(document.getElementById("siete").value);
});

document.querySelector("#ocho").addEventListener("click", function() {
    numeros(document.getElementById("ocho").value);
});

document.querySelector("#nueve").addEventListener("click", function() {
    numeros(document.getElementById("nueve").value);
});

document.querySelector("#coma").addEventListener("click", function() {
    numeros(document.getElementById("coma").value);
});

function numeros(valor) {
    pantalla = valor
    document.getElementById("Pantalla").value += pantalla
}


document.querySelector("#porcentaje").addEventListener("click", porcentaje)
function porcentaje(){
    memoria = document.getElementById("Pantalla").value;
    operacion = operacionPorcentaje();
    resetOperation();
}

function operacionPorcentaje(numero1, numero2){
    let result = numero1 / 100 * numero2;
    return result;
}

document.querySelector("#euroADolar").addEventListener("click", euroADolar);
function euroADolar(){
    result = document.getElementById("Pantalla").value * 1.10;
    document.getElementById("Pantalla").value = result;
}

document.querySelector("#dolarAEuro").addEventListener("click", dolarAEuro)
function dolarAEuro(){
    result = document.getElementById("Pantalla").value * 0.91;
    document.getElementById("Pantalla").value = result;
}

function igual(){
document.getElementById("Pantalla").value = operacion
}