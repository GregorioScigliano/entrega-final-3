class Producto {
    constructor (nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    getName(){
        return this.nombre;
    }
    getPrecio(){
        return this.precio;
    }
}

const producto1 = new Producto("Remera",500);
const producto2 = new Producto("Gorra",200);
const producto3 = new Producto("Disco",150);
const producto4 = new Producto("Poster",100);
const producto5 = new Producto("Camisa",650);

const productos = [];
productos.push( producto1);
productos.push( producto2);
productos.push( producto3);
productos.push( producto4);
productos.push( producto5);

const carrito = [];
let opcionUsuario = 0;



do {
    opcionUsuario = parseInt(prompt("Opciones: 1-Ver productos, 2-Agregar al carrito, 3-Ver carrito, 4-Precio total, 5-Finalizar"));
    switch (opcionUsuario) {
        case 1:
            for (const elemento of productos) {
                console.log(elemento.getName() + " precio: " + elemento.getPrecio() + "$")
            }
            break;
        case 2:
            let pregunta = 0
            do {
                pregunta = parseInt(prompt("1-Camisa, 2-Remera, 3-Disco, 4-Poster, 5-Gorra, 6-Finalizar"));
                switch (pregunta) {
                    case 1:
                        carrito.push( producto5)
                        alert("Se agrego Camisa")
                        break;
                    case 2:
                        carrito.push( producto1)
                        alert("Se agrego Remera")
                        break;
                    case 3:
                        carrito.push( producto3)
                        alert("Se agrego Disco")
                        break;
                    case 4:
                        carrito.push( producto4)
                        alert("Se agrego Poster")
                        break;
                    case 5:
                        carrito.push( producto2)
                        alert("Se agrego Gorra")
                        break;
                    default:
                        break;
                }
            } while (pregunta != 6);
            break;
        case 3:
            for (const elemento of carrito) {
                console.log(elemento.getName() + " precio: " + elemento.getPrecio() + "$")
            }
            
            break;
        case 4:
            let precioTotalCarrito = 0
            for (const elemento of carrito) {
                precioTotalCarrito = precioTotalCarrito + elemento.getPrecio();
            }
            console.log(precioTotalCarrito);
            break;    
        default:
            break;
    }
} while (opcionUsuario != 5);