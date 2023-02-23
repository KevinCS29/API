import { v4 as uuidv4 } from 'uuid';

export const EstudianteP = new Schema(Estudiante, {
    id_estudiante: { type: 'int' },
    nombres: { type: 'string' },
    apellidos: { type: 'string' },
    direccion: { type: 'string' },
    sexo: { type: 'enum' },
    cedula: { type: 'int' },
    telefono: { type: 'int' },
    email: { type: 'string' },
    fecha_creacion: { type: 'date' },
    fecha_modificacion: { type: 'date' }
}) 


export function Estudiante(nombres, apellidos, direccion, sexo, cedula, telefono, email){
    this.id_estudiante = uuidv4();
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
