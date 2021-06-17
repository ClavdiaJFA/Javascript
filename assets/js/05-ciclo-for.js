const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', `Diciembre`]

console.log(meses[0]);
console.log(meses[1]);
console.log(meses[3]);

for (let i=0; i < 12; i++) {
    console.log(meses[i]);

}

/* function multiplicar = (numero) => {  */
const multiplicar = (numero) => {
    for(let i=1; i<=10; i++) {
        document.write(`<h1>${numero} x ${i} = ${numero * i}</h1>`) /* backstick */
    }
}

multiplicar(1);

/* ciclos: código repetitivo */