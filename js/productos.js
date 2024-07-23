
let set_id = 1

class Producto {
    constructor(nombre, numero) {
        this.nombre = nombre
        this.precio = numero
        this.id = set_id++
        this.stock = Math.ceil(Math.random() * 50)
    }
}
    let productos = [
        new Producto('Milanesa', 3500),
        new Producto('Pollo entero', 4000),
        new Producto('Pechuga', 3000),
        new Producto('Pata muslo', 3400),
        new Producto('Alitas', 2700),
        new Producto('Menudos', 2700),
        new Producto('Pan P', 2400),
        new Producto('Pan T', 2400),
        new Producto('Nuggets', 3600),
        new Producto('Empanadas', 3500),
]
console.log(productos);