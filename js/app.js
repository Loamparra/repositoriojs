let sistema_stock = new Sistema(productos)

let menu_str = `
Elegí la opción que quieras realizar.
1 - Aumentar todos los precios.
2 - Agregar producto nuevo.
3 - Modificar un producto.
4 - Ver lista de productos.
0 - Cancelar operación.
`

function ingresarDatos(tipo, texto, otro = '') {
  let datos;

  if (tipo == 'numero') {
    do {
      datos = parseFloat(prompt(texto, otro));
    } while (isNaN(datos) || datos < 0);
  } else if (tipo == 'nombre') {
    do {
      datos = prompt(texto, otro).toLocaleLowerCase();
    } while (datos == '');
  }
  return datos;
}

let clave = prompt('Ingrese la contraseña.');
while (clave != '2024FAIV') {
  switch (clave) {
    case '2024FAIV':
      alert('Bienvenido');
      break;
    default:
      alert('Contraseña incorrecta, volvé a intentarlo.');
      break;
  }
  clave = prompt('Ingrese la contraseña.');
}

let cancelar = false;
while (!cancelar) {
  let opcion = parseInt(prompt(menu_str));
  switch (opcion) {
    case 0:
      alert('Cancelaste la operacion.')
      cancelar = true;
      break;
    case 1:
      sistema_stock.aumentoPrecios();
      break;
    case 2:
      sistema_stock.nuevoProducto();
      break;
    case 3:
      sistema_stock.editarProducto();
      break;
    case 4:
      sistema_stock.mostrarTabla();
      break;
    case 5:
      sistema_stock.filtrarProducto();
      break;
    default:
      alert('No existe esta opción. Volvé a intentartlo.')
  }
}