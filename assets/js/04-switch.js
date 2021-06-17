const edad = 40;
let imprimir = '';
const texto = 'Hola';

switch(edad) {
case 18:
    imprimir = 'Caso 18';
    break;
    case 20:
        imprimir = 'caso 18';
        console.log(edad * 5)
        break;
        case 20:
            imprimir = 'caso 20';
            break;
            case 'Hola':
            imprimir = 'Hola Mundo';
            break;
            default:
                imprimir = 'Datos por defecto'
                break;

}

document.write(`<h1>${imprimir}</h1>`);
/* document.write('<h1>' + imprimir + '</h1>'); */