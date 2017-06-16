var botonEnviar = document.getElementById('enviar');
botonEnviar.addEventListener('click', validarContact);

function validarContact() {
    var name = document.getElementById('name');
    var pwd = document.getElementById('password');


    // Si los value vienen vacios envio mensaje
    if (name.value === '') {
        name.setAttribute('placeholder', 'llene este campo por favor');
    }
    if (pwd.value === '') {
        pwd.setAttribute('placeholder', 'llene este campo por favor');
    }
    if (name.value !== '' && pwd.value !=='') {
        botonEnviar.setAttribute('href', 'index2.html');
    }
}