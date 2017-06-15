// JS Nat para validar el formulario de contacto
var botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', validarContact);

function validarContact() {
    // Obtengo los valores del formulario
    var name = document.getElementById('name');
    var pwd = document.getElementById('password');


    // Si los value vienen vacios envio mensaje
    if (name.value === '') {
        name.setAttribute('placeholder', 'llene este campo por favor');
    }
    if (pwd.value === '') {
        pwd.setAttribute('placeholder', 'llene este campo por favor');
    }
    if (name.value !== '' && pwd.value ) {
        botonEnviar.setAttribute('type', 'submit');
    }
}