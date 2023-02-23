import { v4 as uuidv4 } from 'uuid';

export const DocenteP = {
    id_docente: '',
    nombres: '',
    apellidos: '',
    direccion: '',
    sexo: '',
    cedula: '',
    telefono: '',
    email: '',
    fecha_creacion: '',
    fecha_modificacion: ''

}

export function Docente(nombres, apellidos, direccion, sexo, cedula, telefono, email){
    this.id_docente = uuidv4();
    this.nombres = nombres;
    this.apellidos = apellidos;
    this.direccion = direccion;
    this.sexo = sexo;
    this.cedula = cedula;
    this.telefono = telefono;
    this.email = email;
    this.fecha_creacion = new Date().toLocaleString("en-US", { timeZone: "UTC" });
    this.fecha_modificacion = new Date().toLocaleString("en-US", { timeZone: "UTC" });
}


// mostrarInfo: function() {
//     return `Existe el Docente: ${this.nombres} con cedula:  ${this.precedulacio}`;
// }


