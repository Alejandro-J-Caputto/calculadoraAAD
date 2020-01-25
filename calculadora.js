let memoria
let valorBoton
let pantalla
let operacion



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



 