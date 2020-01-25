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



//FUNCIONES ALEJANDRO


//POTENCIA
document.querySelector('#x2').addEventListener('click', potencia )
function potencia(){
    var result;
    result = calcPotencia(document.getElementById("Pantalla").value, 2)
    document.getElementById("Pantalla").value = result;
}
        function calcPotencia (x){
            return Math.pow(x, 2)

        }

        //RAIZ CUADRADA
document.querySelector("#V2").addEventListener("click", raiz)
function raiz (){
    var result;
    result = V2r(document.getElementById("Pantalla").value )
    document.getElementById("Pantalla").value = result;
 }

 function V2r(x){
    return Math.sqrt(x)
}
// ALEATORIO CON PROMPT
document.querySelector("Ran").addEventListener('click', Random)
function Random(){
   var result = datoRan(a, b)
    document.getElementById("Pantalla").value = result 
   

}

function Randi (max, min){
     return Math.floor(Math.random()*(max + 1 - min)) + min;

 }
function datoRan (){
    var maxMin = []
    console.log(maxMin)
    var a = parseInt(prompt('Introduzca un maximo'))
     var b = parseInt(prompt('Introduzca un minimo'))
     return maxMin.push(Randi(a,b))
}

// RESET RETOCADA 

document.querySelector('#AC').addEventListener('click', borrado)
function borrado(){
    resetOperation()
    document.getElementById("Pantalla").value = ""
    memoria = ""
    operacion = ""
    }





function  resetOperation(){
    document.getElementById("Pantalla").value = ""
    memoria = ""
    operacion = ""
}

//RESET SOFT

document.querySelector('#CE').addEventListener('click', borradoSuave)
function borradoSuave(){
    resetSoft()
    document.getElementById("Pantalla").value = ""
}

function resetSoft(){
    document.getElementById("Pantalla").value= ""
}



 