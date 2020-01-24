


 function operacionSumar(num1,num2){
  
    let resultado = num1 + num2;        //suma

    return resultado;
  }

  
    document.getElementById("Pantalla").value = suma;

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
function suma(){
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
 

 
