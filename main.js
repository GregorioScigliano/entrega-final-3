let descuento = 1, opciones;
do {
    opciones = prompt("Metodo de pago 1-Tarjeta de Credito, 2-Tarjeta de Debito, 3-Efectivo, 4-Paypal");
} while (opciones < 1 || opciones > 4);
switch (opciones) {
    case "1":
        if(prompt("Tiene Visa? Si / No").toLocaleLowerCase() == "si"){
            descuento = 0.8
        }else if(prompt("Tiene MasterCard? Si / No").toLocaleLowerCase() == "si"){
            descuento = 0.7
        }else{
            descuento = 0.9
        }
        break;
    case "2":
        descuento = 1.2
        break;
    case "3":
        descuento = 1
        break;
    case "4":
        descuento = 1.1
        break;    
}

function total(cantidad, precio, descuento) {
    precioTotal = cantidad*precio*descuento
    return precioTotal
}

let cantidad = parseInt(prompt("Numero de entradas deseado "));

let monto = total (cantidad, 100, descuento);
alert("Monto total a pagar es " + monto)
