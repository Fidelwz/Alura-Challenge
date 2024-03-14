// Definir la clave de encriptación
const key = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
];

// Obtener referencias a elementos del DOM
const data = document.getElementById('textData');
const textoSalida = document.getElementById('textoSalida');
const btnCopiar = document.getElementById('copiarTexto');
const contenedor = document.getElementById('lateralText');

// Obtener una referencia a la imagen dentro del contenedor
const imagen = contenedor.querySelector('#imageLateral');

// Obtener referencias a botones de encriptar y desencriptar
const encriptarBtn = document.getElementById('encriptarBtn');
const desencriptarBtn = document.getElementById('desencriptarBtn');

// Evento de clic para encriptar
encriptarBtn.addEventListener('click', function () {
    const texto = encrypt(data.value);
});

const inputTexto = document.getElementById('textData');

// Evento de clic para copiar al portapapeles
btnCopiar.addEventListener('click', function() {
    const contenido = textoSalida.innerText;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            console.log('Contenido copiado al portapapeles: ', contenido);
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el contenido: ', err);
            alert('No se pudo copiar el texto. Por favor, inténtelo de nuevo.');
        });
});

// Evento de clic para desencriptar
desencriptarBtn.addEventListener('click', function () {
    const texto = decrypt(data.value);
});

// Función para encriptar
function encrypt(toEncrypt) {
    if (toEncrypt.trim() === "") {
        return "";
    }
    for (const [original, replacement] of key) {
        toEncrypt = toEncrypt.replaceAll(original, replacement);
    }
    return showData(toEncrypt);
}

// Función para desencriptar
function decrypt(toDecrypt) {
    if (toDecrypt.trim() === "") {
        return "";
    }
    for (const [original, replacement] of key) {
        toDecrypt = toDecrypt.replaceAll(replacement, original);
    }
    return showData(toDecrypt);
}

// Función para mostrar el resultado
function showData(inputText) {
    textoSalida.innerHTML = inputText == "" ? 'Ningún mensaje fue encontrado' : inputText;
    textoSalida.classList.add('text-3xl');
    textoSalida.classList.add('text-justify');
    imagen.remove();
    btnCopiar.classList.remove('hidden');
    return inputText;
}



inputTexto.addEventListener('input', function(event) {
    const textoIngresado = event.target.value;
    const textoEnMinusculas = textoIngresado.toLowerCase();
    inputTexto.value = textoEnMinusculas;
});


inputTexto.addEventListener('keypress', function(event) {
    const charCode = event.which || event.keyCode;
    if ((charCode < 97 || charCode > 122) && (charCode < 37 || charCode > 40) && charCode !== 8 && charCode !== 46) {
        event.preventDefault();
    }
});