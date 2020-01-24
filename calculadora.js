let memoria
let valorBoton
let pantalla
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