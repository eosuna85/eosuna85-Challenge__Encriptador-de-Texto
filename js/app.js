let caracteresEspeciales = /^[A-Za-z]{1,20}$/;
let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

function verificarTexto() {
    let textoACodificar = document.getElementById('areaDeTexto').value.toLocaleLowerCase();
    return textoACodificar;
}



verificarTexto();
