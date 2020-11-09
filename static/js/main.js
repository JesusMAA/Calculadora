/**var elementos = document.getElementsByTagName("input")

for(var i=0; i<elementos.length; i++){
    console.log(elementos[i].value)
}*/


var a=-1,b=-1
var operador = ''
function operacion(elemento){
    if(a==-1) a=elemento.value;
    else if(b==-1) b=elemento.value;
    document.getElementById("ans").setAttribute("value",elemento.value)
}

function operar(elemento){
    if (operador=='')
    operador = elemento.value;
}

function resultado(elemento){
    var operadores ={
        "+": a+b,
        "-": a-b,
        "*": a*b,
        "/": a/b,
    }
    document.getElementById("ans").setAttribute("value",operadores[operador])
    a = -1
    b = -1
}

function limpiar(){
    document.getElementById("ans").setAttribute("value",'')
}