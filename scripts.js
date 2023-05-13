var persona = {
    nombre : '',
    apellido : '',
    telefono : '',
    correo : '',

    saludar : function(){
        let mensaje = `hola me llamo ${this.nombre}${this.apellido}, mucho gusto.`
        return mensaje
    },
    contactos : function () {
        let contacto = `mi telefono es: ${this.telefono} y mi correo es ${this.correo}`
        return contacto
    }

}

function asignarDatosalobjeto(unNombre , unApellido, unTelefono,unCorreo) {
    persona.nombre =  unNombre
    persona.apellido = unApellido
    persona.telefono = unTelefono
    persona.correo = unCorreo
}
function traeDatos() {
    let nombre = document.getElementById('txtnombre').value
    let apellido = document.getElementById('txtapellido').value
    let correo = document.getElementById('txtcorreo').value
    let telefono = document.getElementById('txttelefono').value

    asignarDatosalobjeto(nombre, apellido, telefono, correo)
    alert('datos almacenados')


}

function presentarInformacion() {
    let saluda = document.getElementById('saludar')
    saluda.innerHTML = persona.saludar()
    let contaacto = document.getElementById('contacto')
    contaacto.innerHTML = persona.contactos()
}

function eventosDatos() {
    let booton = document.getElementById('botonEnviar')
    booton.addEventListener('click', traeDatos)

    let elbotonMostrar = document.getElementById('elbotonMostrar')
    elbotonMostrar.addEventListener('click', presentarInformacion)
}