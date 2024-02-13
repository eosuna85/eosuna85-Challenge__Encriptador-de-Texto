//Función para Verificar el texto
function verificarTexto(encriptar) {
    const areaDeTexto = document.getElementById('areaDeTexto').value;
    const caracteresEspeciales = /[A-Z!@#$%^&*(),.?":{}|<>1234567890]/.test(areaDeTexto);
    if (!caracteresEspeciales) {
        let resultado = encriptar ? mensajeEncriptado(areaDeTexto) : mensajeDesencriptado(areaDeTexto);
        mostrarResultado(resultado)
    } else {
        mensajeAlerta();
    };
}

//Función para Encriptar
function mensajeEncriptado(texto) {
    return texto.replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
}

//Función para Desencriptar
function mensajeDesencriptado(texto) {
    return texto.replace(/enter/igm, 'e')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ober/igm, 'o')
        .replace(/ufat/igm, 'u');
}

//Deshabilita botones y mensje de alerta
function mensajeAlerta() {
    document.getElementById('encriptar').disabled = true;
    document.getElementById('desencriptar').disabled = true;
    alert('Solo letras minúsculas y sin acentos, Refresque el encriptador haciendo click en Logo.')
}

// Función para copiar el texto al portapapeles
function copiarTexto() {
    areaDeTextoBuscador.select();
    document.execCommand('cut');
    alert('Texto copiado al portapapeles!');
}

//funcion para la llamada de eventos botones
function mostrarResultado(resultado) {
    let salidaTexto = document.getElementById('areaDeTextoBuscador');
    salidaTexto.value = resultado;
    document.getElementById('areaDeTextoBuscador').style.display = 'show';
    document.getElementById('areaDeTextoBuscador').style.display = 'block';
    document.getElementById('copiar').style.display = 'show';
    document.getElementById('copiar').style.display = 'inline';
    document.getElementById('seccionBuscador').style.display = 'none';
    copiarBtn.addEventListener('click', copiarTexto);
}
