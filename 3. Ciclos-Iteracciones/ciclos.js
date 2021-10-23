//Solicita cantidad de entradas disponibles y después le asigna a cada nombre que vayamos haciendo
let Num = parseInt(prompt("Ingresa la cantidad de asientos disponibles"));
let disponible = Num;
for (let i = 1; i <= Num; i++) {
    alert("Tienes "+ disponible + " asientos disponibles pulse aceptar para continuar")
    let nombre = prompt("Ingresa tu nombre completo o escriba SALIR si no desea ocupar más asientos");
    console.log(nombre + " Tiene el asiento " + i);
    disponible = disponible - 1;
    if (nombre == 'SALIR') {
        console.log("Ah finalizado con " + disponible + " asientos disponibles, vuelva más tarde para ocuparlos.");
        break;
    }
}