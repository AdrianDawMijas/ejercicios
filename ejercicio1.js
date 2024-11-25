//Ejercicio1

function triangleCicle(){
    for(var x=0; x<7;x++){
        var resultado = "";
        for(var y=0; y<x;y++){
            resultado+="#";
        }
        console.log(resultado);
    }
}


function triangleCiclePantalla(){
    var cadenaTotal = "";
    for(var x=0; x<7;x++){
        var resultado = "";
        for(var y=0; y<x;y++){
            resultado+="#";
        }
        cadenaTotal+=resultado+"<br>";
    }
    var id = document.getElementById("resultadoEjercicio");
    id.innerHTML=cadenaTotal;
}

//Ejercicio2

function numerosHasta100(){
    for(var x = 1; x <101 ; x++){
        if(x%3==0&&x%5==0){
            console.log("Fizz");
        }
        else if(x%3==0){
            console.log("Fizz");
        }
        else if(x%5==0){
            console.log("Buzz");
        }
        else{
            console.log(x);
        }
    }
}

//Ejercicio3
function ajedrez(){
    for(var x = 0; x < 8 ; x++){
        var resultado = "";
        for(var y = 0; y < 4; y++){
            if(x%2!=0){
                resultado += "# "
            }
            else{
                resultado += " #"
            }
        }
        console.log(resultado);
    }
}


//Ejercicio4
function minimo(x,y){
    console.log("Ejemplo con "+x+" y con "+y);
    if(!isNaN(x)&&!isNaN(y)){
        if(x<=y){
            console.log(x);
        }
        else{
            console.log(y);
        }
    }
}

//Ejercicio5
function contarFs(s){
    console.log("Contamos el numero de palabras en mayus de "+s)
    var caracteresMayus=0;
    for(const caracter of s){
        if(caracter==caracter.toUpperCase()&&caracter!=caracter.toLowerCase()){
            caracteresMayus++;
        }
    }
    console.log(caracteresMayus);
}
