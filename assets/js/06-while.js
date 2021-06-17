/* imprimir código que sea repetitivo */

let year = 2021;

/*  Operadores relacionales
    Mayor: >
    Menor: <
    Mayor o igual: >=
    Menor o igual: <=
    Igual: ==
    Distinto: !=
*/


while(year !=1990) {
    document.write(`<h1>${year}</h1>`);

    year--;

   /* if(year == 10) {
        break;
    } 
    <!--si en el primer ejemplo se cumple la condición hasta el año 1991, con este ejemplo, va a llegar hasta 2011 -->
    */ 
}

/* primero ejecuta el código y luego verifica, a diferencia del while */

while(year == 2020) {
    document.write(`<h1>Ciclo While${year}</h1>`);
}

do {
document.write(`<h1>Ciclo Do While${year}</h1>`);
} while(year == 2020);