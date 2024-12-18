//-**-*-*-*-*-*-*-*validar datos de contacto-*-*-*-*-*-*-*-*
const nombreInput = document.getElementById('nombres');
const apellidosInput = document.getElementById('apellidos');
const telefonoInput = document.getElementById('telefono');
const emailInput = document.getElementById('email');
const formulario = document.getElementById('formulario');



function validarNombre() {
    const nombre = nombreInput.value;
    const nombrePattern = /^[a-zA-ZñÑ]+(\s[a-zA-ZñÑ]+)*$/
    
    if (nombre.length >=3 && nombrePattern.test(nombre)){
        nombreInput.classList.add('valido')
        nombreInput.classList.remove('invalido');
        document.getElementById('nombreError').textContent = ''
    } else {
        nombreInput.classList.add('invalido')
        nombreInput.classList.remove('valido')
        document.getElementById('nombreError').textContent = 'El nombre debe contener al menos 3 caracteres y sin numeros.'
    }
}

function validarApellidos() {
    const apellidos = apellidosInput.value;
    const apellidosPattern = /^[a-zA-ZñÑ]+(\s[a-zA-ZñÑ]+)*$/

    if (apellidos.length >=3 && apellidosPattern.test(apellidos)){
        apellidosInput.classList.add('valido');
        apellidosInput.classList.remove('invalido');
        document.getElementById('apellidosError').textContent = ''
    } else {
        apellidosInput.classList.add('invalido');
        apellidosInput.classList.remove('valido');
        document.getElementById('apellidosError').textContent = 'Los apellidos deben contener al menos 3 caracteres y sin numeros.'
    }
}

function validarTelefono() {
    const telefono = telefonoInput.value;
    const telefonoPattern = /^\d{9}$/

    if (telefonoPattern.test(telefono)){
        telefonoInput.classList.add('valido');
        telefonoInput.classList.remove('invalido');
        document.getElementById('telefonoError').textContent = ''
    } else {
        telefonoInput.classList.add('invalido');
        telefonoInput.classList.remove('valido');
        document.getElementById('telefonoError').textContent = 'El telefono de usuario debe contener 9 caracteres numericos'
    }
}

function validarEmail() {
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (emailPattern.test(email)){
        emailInput.classList.add('valido');
        emailInput.classList.remove('invalido');
        document.getElementById('emailError').textContent = ''
    } else {
        emailInput.classList.add('invalido');
        emailInput.classList.remove('valido');
        document.getElementById('emailError').textContent = 'El email debe contener al menos 3 caracteres y comenzar con una letra.'
    }
};

nombreInput.addEventListener('input', validarNombre);
apellidosInput.addEventListener('input', validarApellidos);
telefonoInput.addEventListener('input', validarTelefono);
emailInput.addEventListener('input', validarEmail);
//-*-*-*---*-***-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

//+*+*+*+*+*+*+*+*+validar datos del presupuesto*+*+*+*+*+*+*

let sumaTotal = 0;
let sumaTotalSin = 0;

const tipoHabitacion = document.querySelector("#habitacion");
const tiempoEstadia = document.querySelector("#tiempo");
const extras = document.querySelectorAll("#extras>div>input");
const total = document.querySelector("#totalConDescuento");
const totalSin = document.querySelector("#totalSinDescuento");

let suma = ()=>{
sumaTotal = parseInt(tipoHabitacion.value)*tiempoEstadia.value;
sumaTotalSin = parseInt(tipoHabitacion.value)*tiempoEstadia.value;
let descuento = 0;

if (tiempoEstadia.value >= 3 && tiempoEstadia.value < 5){
    alert('Haz obtenido un descuento del 10% en el total de la reserva a partir del dia 3');
    descuento = sumaTotal * 0.10;
} else if(tiempoEstadia.value >= 5){
    alert('Haz obtenido un descuento del 20% en el total de la reserva a partir del dia 5');
    descuento = sumaTotal * 0.20;
} else if(tiempoEstadia.value >= 7 && tiempoEstadia.value < 31){
descuento = 0.20;
}

sumaTotal = sumaTotal - descuento;

extras.forEach(element => {
    if (element.checked) {
        sumaTotal += parseInt(element.value);
    }
});
extras.forEach(element => {
    if (element.checked) {
        sumaTotalSin += parseInt(element.value);
    }
});

total.value = sumaTotal;
totalSin.value = sumaTotalSin;
}


extras.forEach(element => {
element.addEventListener("change",suma,false)
});
tipoHabitacion.addEventListener("change",suma,false);
tiempoEstadia.addEventListener("change",suma,false);


//+*+*+*+*+*+*+*+*+VALIDAR EL FORMULARIO*+*+*+*+*+*+*

const terminos = document.getElementById('condiciones')

formulario.addEventListener('submit', function(event){

event.preventDefault()
validarNombre()
validarEmail()
validarApellidos()
validarTelefono()

if (nombreInput.classList.contains('valido') &&
apellidosInput.classList.contains('valido') &&
telefonoInput.classList.contains('valido') &&
emailInput.classList.contains('valido') && terminos.checked){
    alert('Formulario enviado correctamente')
    formulario.submit()
}else{
    alert('Por favor, complete todos los campos del formulario correctamente y acepte los terminos y condiciones.')
}
})