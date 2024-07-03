function registro(){
    let nombre = prompt('Ingrese su nombre: ');
    alert('Hola ' + nombre + ', te doy la bienvenida a nuestra web');
    let opcion = prompt( nombre + ', te invitamos a llenar un formulario para recibir novedades u ofertas de nuestra página web \nIngresa "si" o "no" para continuar.');
    if ((opcion == 'si') || (opcion == 'SI') || (opcion == 'Si')) {
        let apellido = prompt('Ingrese su apellido: ');
        let pais = prompt('Ingrese el país: ');
        let email = prompt('Ingrese su gmail: ');
        let edad = parseInt(prompt('Ingrese su edad: '));
        if (isNaN(edad)){
            alert('No ingresaste números. Volvé a intentarlo.');
        } else{
            alert('¡Gracias ' + nombre + ' ' + apellido + ', te enviaremos por gmail nuestra informacion!\nLos datos ingresados son: \nNombre: '+ nombre +'\nApellido: '+ apellido +'\nEdad: '+ edad +'\nPaís: '+ pais +'\nGmail: '+ email + '\nSi los datos están mal ingresados, intente nuevamente.');
        }
    
    } else if ((opcion == 'no') || (opcion == 'NO') || (opcion == 'No')){
        alert('¡Adiós ' + nombre + '!');

    } else {
        alert('No ingresaste ninguna de las opciones correspondientes.');
    } 
    
}
registro();




