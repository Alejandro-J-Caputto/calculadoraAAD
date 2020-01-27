let memoria
let pantalla
let operacion = ""
let status = 0

//suma
function operacionSumar(num1, num2) {
    let resultado = parseFloat(num1) + parseFloat(num2);
    return resultado;
}
document.querySelector("#suma").addEventListener("click", suma)
function suma() {
    memoria = document.getElementById("Pantalla").value
    operacion = "suma"
    status = 1
}
//resta
function operacionRestar(num1, nume2) {
    let resultado = num1 - nume2;
    return resultado;
}
document.querySelector("#resta").addEventListener("click", resta)
function resta() {
    memoria = document.getElementById("Pantalla").value
    operacion = "resta"
    status = 1
}
//multiplica
function operacionMultiplicar(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
document.querySelector("#multi").addEventListener("click", multiplica)
function multiplica() {
    memoria = document.getElementById("Pantalla").value
    operacion = "multiplicacion"
    status = 1
}
//dividir
function operacionDividir(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}
document.querySelector("#division").addEventListener("click", division)
function division() {
    memoria = document.getElementById("Pantalla").value
    operacion = "division"
    status = 1
}

//POTENCIA
document.querySelector('#x2').addEventListener('click', potencia)
function potencia() {
    var result;
    result = calcPotencia(document.getElementById("Pantalla").value, 2)
    document.getElementById("Pantalla").value = result;
    status = 1
}
function calcPotencia(x) {
    return Math.pow(x, 2)
}
//RAIZ CUADRADA
document.querySelector("#V2").addEventListener("click", raiz)
function raiz() {
    var result;
    result = V2r(document.getElementById("Pantalla").value)
    document.getElementById("Pantalla").value = result;
    status = 1
}
function V2r(x) {
    return Math.sqrt(x)
}
// ALEATORIO CON PROMPT
document.querySelector("#Ran").addEventListener('click', Random)
function Random() {
    var result = datoRan()
    document.getElementById("Pantalla").value = result
    status = 1
}

function Randi(max, min) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;

}
function datoRan() {
    var maxMin;
    var a = parseFloat(prompt('Introduzca un maximo'))
    var b = parseFloat(prompt('Introduzca un minimo'))
    return maxMin = (Randi(a, b))
}

// RESET RETOCADA 

document.querySelector('#AC').addEventListener('click', borrado)
function borrado() {
    resetOperation()
    document.getElementById("Pantalla").value = ""
    memoria = ""
    operacion = ""
    status = 0
}
//RESET SOFT
document.querySelector('#CE').addEventListener('click', resetOperation)
function resetOperation() {
    document.getElementById("Pantalla").value = ""
}
//NUMEROS
document.querySelector("#cero").addEventListener("click", function () {
    numeros(document.getElementById("cero").value);
});

document.querySelector("#uno").addEventListener("click", function () {
    numeros(document.getElementById("uno").value);
});

document.querySelector("#dos").addEventListener("click", function () {
    numeros(document.getElementById("dos").value);
});

document.querySelector("#tres").addEventListener("click", function () {
    numeros(document.getElementById("tres").value);
});

document.querySelector("#cuatro").addEventListener("click", function () {
    numeros(document.getElementById("cuatro").value);
});

document.querySelector("#cinco").addEventListener("click", function () {
    numeros(document.getElementById("cinco").value);
});

document.querySelector("#seis").addEventListener("click", function () {
    numeros(document.getElementById("seis").value);
});

document.querySelector("#siete").addEventListener("click", function () {
    numeros(document.getElementById("siete").value);
});

document.querySelector("#ocho").addEventListener("click", function () {
    numeros(document.getElementById("ocho").value);
});

document.querySelector("#nueve").addEventListener("click", function () {
    numeros(document.getElementById("nueve").value);
});

document.querySelector("#coma").addEventListener("click", function () {
    numeros(document.getElementById("coma").value);
});

function numeros(valor) {
    pantalla = valor
    if (status != 0) {
        resetOperation()
        status = 0
    }
    document.getElementById("Pantalla").value += pantalla
}

//PORCENTAJE
document.querySelector("#porcentaje").addEventListener("click", porcentaje)
function porcentaje() {
    memoria = document.getElementById("Pantalla").value;
    operacion = "porcentaje"
    status = 1
}

function operacionPorcentaje(numero1, numero2) {
    let result = numero1 / 100 * numero2;
    return result;
}
//EURO A DOLAR
document.querySelector("#euroADolar").addEventListener("click", euroADolar);
function euroADolar() {
    result = document.getElementById("Pantalla").value * 1.10;
    document.getElementById("Pantalla").value = result;
    status = 1
}
//DOLAR A EURO
document.querySelector("#dolarAEuro").addEventListener("click", dolarAEuro)
function dolarAEuro() {
    result = document.getElementById("Pantalla").value * 0.91;
    document.getElementById("Pantalla").value = result;
    status = 1
}
//IGUAL
document.querySelector("#igual").addEventListener("click", igual)

function igual() {
    if (operacion != "") {
        if (operacion === "suma") {
            document.getElementById("Pantalla").value = operacionSumar(memoria, document.getElementById("Pantalla").value)
        }
        if (operacion === "resta") {
            document.getElementById("Pantalla").value = operacionRestar(memoria, document.getElementById("Pantalla").value)
        }
        if (operacion === "multiplicacion") {
            document.getElementById("Pantalla").value = operacionMultiplicar(memoria, document.getElementById("Pantalla").value)
        }
        if (operacion === "division") {
            document.getElementById("Pantalla").value = operacionDividir(memoria, document.getElementById("Pantalla").value)
        }
        if (operacion === "porcentaje") {
            document.getElementById("Pantalla").value = operacionPorcentaje(memoria, document.getElementById("Pantalla").value)
        }
        status = 1
    }
    operacion = ""
}
