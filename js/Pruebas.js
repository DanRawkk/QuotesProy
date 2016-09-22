var array = ["hola","ño","chi",":3","te amo",">.<","¬¬",":v","=^.^=","Miaww"];


/* crea un numero al azar del del 0 al ultimo index del array*/
function getRandomN(){
  return Math.floor(Math.random() * array.length);
}

/*
Z: crea un numero al azar entre 0 y 10
check: verifica todos los numeros en una array
guardarNumeros: guarda los numeros de index que aun no estan en el array.
r2: variable donde se guardaran los index ya utilisados
a: booleano usado para saver si ya existe un elemento
*/
var r2 = [];


function guardarNumeros (z){
  //var z = getRandomN();//crea un numero random
  console.log(z);//imprime el numero random
  var a = true;//Si la variable permanece "True" significa que ese numero "z" no a sido utilisado
  for(var i = 0; i < r2.length; i += 1 ){
    if (z == r2[i]){//Si "for"  da "True" significa que el numero "z" ya fue utilisado
      a = false;//Cambia "a" to "false"
    }
  }
  if (a){//Si "a" permanece "true" entonces agrega el nuevo valor a "r2"
    r2.push(z);
    return z;
  }
  console.log(r2.join(', '));
}

function reniciar(){
    //var len = array.length -1;
    if(r2.length == array.length){
      r2 = [];
    }
}

function dontRepeat (){
  while(true){
    var x = getRandomN();
    var quote = guardarNumeros(x);
    if(quote != undefined){
      return quote;
    }
  }
}

function getRandomQuote(){
    var index = dontRepeat();
    reniciar();
    return console.log(array[index]);
}
getRandomQuote();

document.getElementById('pruevas');
