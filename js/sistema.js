class Sistema {
    constructor(productos) {

        this.productos = productos
    }

    nuevoProducto() {
        const nombre = ingresarDatos('nombre', 'Ingresar el nombre del producto');
        const precio = ingresarDatos('numero', 'Ingresar el precio del producto');
        this.producto.push(new Producto(nombre, precio));
    }

    mostrarTabla() {
        console.clear();
        console.table(productos);
    }

    editarProducto() {
        Producto.nombre = ingresarDatos('nombre', 'Ingrese nombre del producto', Producto.nombre);
        Producto.precio = ingresarDatos('numero', 'Ingrese el precio del producto', Producto.precio);
    this.productos.push(Producto(nombre , precio))
    }

    aumentoPrecios() {
        let porcentaje = ingresarDatos('numero', 'Ingresa al porcetaje que quieras agregar.')
        productos.forEach((Producto) => {
            Producto.precio ((Producto.precio * porcentaje) / 100) + Producto.precio;
        })
        mostrarTabla(productos);
    }

    filtrarProducto(productos) {
        let buscador = ingresarDatos('nombre', 'Ingresa lo que estas buscando');
        const resultado = productos.filter((Producto) => (Producto.nombre.toLowerCase().indexOf(buscador) != -1));
        mostrarTabla(resultado);
        if (resultado.length == 0) {
            alert(`Se encontraton 0 resultados en su ${buscador}`);
        } else {
            alert(`Se encontraron estos resultados ${resultado.length} en la busqueda ${buscador}.`);
        }
    }
}





