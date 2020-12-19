import Usuario from "./Usuario.js"

export default class Alumno extends Usuario{
    constructor(nombres,apellidos,correo,activo,cursosTomado){
        super(nombres,apellidos,correo,activo)
        this.cursosTomado=cursosTomado
    }
}