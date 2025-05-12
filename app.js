//Declaramos las variables//
let pesos, monto, montoDolar,opcion;
const dolar=1300;
let history=[];

//Creamos la función//
function convertCurrency(pesos){
    return pesos/dolar
}

//Creamos el bucle//
do{
    opcion = prompt('Elija una opción \n1) Divisa (ARS -> USD) \n2) Salir');
    switch(opcion){
        case "1":
            monto=parseFloat(prompt('Monto en pesos'));
            montoDolar= convertCurrency(monto).toFixed(2);
            alert(montoDolar + ' USD');

            //Pusheamos los datos a la array//
            history.push({
                tipo: 'divisa',
                entrada: monto+' ARS',
                salida: montoDolar+' USD',
                fecha: new Date().toLocaleString()
            });
            break
        case "2":
            alert('Salió');
            break;
        default:
            alert('No ingreso un valor valido');
    }
}while (opcion!=='2') 
console.log(history)
