const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');//estamos seleccionando a todos los que tengan la clase numero.

const botonesOperadores = document.querySelectorAll('.operador');//no olvidar el punto al seleccionar la clase

const display = new Display(displayValorAnterior,displayValorActual);

botonesNumeros.forEach(boton =>{
    boton.addEventListener('click',()=> display.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',()=> display.computar(boton.value))
})




