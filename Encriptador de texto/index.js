function encriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");


    let textoCifrado = texto 
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat")

if (texto.length !=0){
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Secreto encriptado";
    parrafo.textContent = "";
    imagen1.src = "imagenes/imagen-4.png"; 
} else{
    imagen1.src = "imagenes/imagen-3.png"
    tituloMensaje.textContent = "No sé encontro ningun mensaje secreto"
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar"
    swal("Ooops", "Debes ingresar el texto secreto", "warning")
}
}


function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagen1 = document.getElementById("imagen1");
    
    let textoCifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    if (texto.length != 0) {
    document.getElementById("texto").value = textoCifrado;
    tituloMensaje.textContent = "Secreto desencriptado";
    parrafo.textContent = "";
    imagen1.src = "imagenes/imagen-2.png"; 
    } else {
    imagen1.src = "imagenes/imagen-3.png";
    tituloMensaje.textContent = "No sé encontro ningun mensaje secreto"
    parrafo.textContent = "Ingresa el texto que quieres encriptar o desencriptar"
    swal("Ooops", "Debes ingresar el texto secreto", "warning")
    }
}