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
    var id = document.getElementById("resultadoEjercicio1");
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

function numerosHasta100Pantalla() {
    var cadenaTotal = "";
    for (var x = 1; x < 101; x++) {
        if (x % 3 == 0 && x % 5 == 0) {
            cadenaTotal += "Fizz<br>";
        } else if (x % 3 == 0) {
            cadenaTotal += "Fizz<br>";
        } else if (x % 5 == 0) {
            cadenaTotal += "Buzz<br>";
        } else {
            cadenaTotal += x + "<br>";
        }
    }
    var id = document.getElementById("resultadoEjercicio2");
    id.innerHTML = cadenaTotal;
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

function ajedrezPantalla() {
    var cadenaTotal = "";
    for (var x = 0; x < 8; x++) {
        var resultado = "";
        for (var y = 0; y < 4; y++) {
            if (x % 2 != 0) {
                resultado += "# ";
            } else {
                resultado += " #";
            }
        }
        cadenaTotal += resultado + "<br>";
    }
    var id = document.getElementById("resultadoEjercicio3");
    id.innerHTML = cadenaTotal;
}


//Ejercicio4
function minimo() {
    // Solicita al usuario que introduzca dos números
    var x = prompt("Por favor, introduce el primer número:");
    var y = prompt("Por favor, introduce el segundo número:");
    
    // Verifica si los valores son números válidos
    if (isNaN(x) || isNaN(y)) {
        alert("Uno o ambos valores no son números válidos.");
        return;
    }

    // Convierte las entradas a números
    x = parseFloat(x);
    y = parseFloat(y);

    console.log("Ejemplo con " + x + " y " + y);

    // Determina el mínimo
    var resultado = "El menor entre " + x + " y " + y + " es: ";
    if (x <= y) {
        resultado += x;
    } else {
        resultado += y;
    }

    console.log(resultado);

    // Muestra el resultado en pantalla
    var id = document.getElementById("resultadoEjercicio4");
    id.innerHTML = resultado;
}


//Ejercicio 5

function contarFs() {
    // Solicita al usuario que ingrese una palabra o frase
    var s = prompt("Por favor, introduce una palabra o frase:");
    
    // Verifica si el usuario introdujo algo
    if (s === null || s.trim() === "") {
        alert("No se introdujo ninguna palabra o frase.");
        return;
    }
    
    console.log("Contamos el número de caracteres en mayúsculas de: " + s);
    
    // Contar caracteres en mayúscula
    var caracteresMayus = 0;
    for (const caracter of s) {
        if (caracter == caracter.toUpperCase() && caracter != caracter.toLowerCase()) {
            caracteresMayus++;
        }
    }
    
    console.log("Número de caracteres en mayúsculas: " + caracteresMayus);
    
    // Mostrar el resultado en pantalla
    var id = document.getElementById("resultadoEjercicio5");
    id.innerHTML = "Número de caracteres en mayúsculas de \"" + s + "\": " + caracteresMayus;
}

