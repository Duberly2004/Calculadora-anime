
class Display {
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '%',
            multiplicar: 'x',
            restar: '-'

        }
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);//estamos diciendo que borre solamente su ultimo número 
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        this.imprimirValores();

    }
    agregarNumero(numero){
        if (numero === '.' && this.valorActual.includes('.')) return//aquí estamos preguntando que si ya hay un punto incluido que ya no incluya otro.
         
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }
    imprimirValores(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if ( isNaN(valorActual)|| isNaN(valorAnterior)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual)
    }
    
}