
 function operacionSumar(num1,num2){
  
    let resultado = num1 + num2;        //suma

    return resultado;
  }

  
  

  document.querySelector("#suma").addEventListener("click", suma)
  function suma(){
      memoria = document.getElementById("Pantalla").value
      operacion = operacionSumar()
      resetOperation()
  }
  //-----------------------------------------------------------------------------------

  function operacionRestar(num1, nume2) {

    let resultado = num1 - nume2;     //resta

    return resultado;
      
  }
  document.getElementById("Pantalla").value = resta;

  document.querySelector("#resta").addEventListener("click", resta)
  function resta(){
      memoria = document.getElementById("Pantalla").value
      operacion = operacionRestar()
      resetOperation()
  }
  

  

//-----------------------------------------------------------------------------------------------

function opercionMultiplicar(num1, num2) {

    let resultado = num1 * num2;                  //multiplica

    return resultado;
}
document.getElementById("Pantalla").value = multiplica;

document.querySelector("#multi").addEventListener("click", multiplica)
function multiplica(){
    memoria = document.getElementById("Pantalla").value
    operacion = operacionMultiplicar()
    resetOperation()
}

   

//------------------------------------------------------------------------------------------------


function operacionDividir(num1, num2) {

    let resultado = num1 / num2;              //dividir

    return resultado;

}
document.getElementById("Pantalla").value = division;

  document.querySelector("#division").addEventListener("click", division)
  function division(){
      memoria = document.getElementById("Pantalla").value
      operacion = operacionDividir()
      resetOperation()
  }
 

//----------------------------------------------------------------------------------------
 

 
let memoria
let valorBoton
let pantalla
let operacion

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
document.querySelector("#Ran").addEventListener('click', Random)
function Random(){
   var result = datoRan()
    document.getElementById("Pantalla").value = result
}

function Randi (max, min){
     return Math.floor(Math.random()*(max + 1 - min)) + min;
 }
function datoRan (){
    var maxMin; 
    console.log(maxMin)
    var a = parseInt(prompt('Introduzca un maximo'))
     var b = parseInt(prompt('Introduzca un minimo'))
     return maxMin = (Randi(a,b))
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
//NUMEROS
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

//PORCENTAJE
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
//EURO A DOLAR
document.querySelector("#euroADolar").addEventListener("click", euroADolar);
function euroADolar(){
    result = document.getElementById("Pantalla").value * 1.10;
    document.getElementById("Pantalla").value = result;
}
//DOLAR A EURO
document.querySelector("#dolarAEuro").addEventListener("click", dolarAEuro)
function dolarAEuro(){
    result = document.getElementById("Pantalla").value * 0.91;
    document.getElementById("Pantalla").value = result;
}
//IGUAL
function igual(){
document.getElementById("Pantalla").value = operacion
}

