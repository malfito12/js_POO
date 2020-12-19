const alumno={
    //atributos del objeto
    nombre: 'alex maraza',
    edad: 26,
    sexo: 'masculino',
    // direccion: 'calle serrano',
    // hermanos:['juan', 'maria', 'pepe'],
    padre: {
        nombre: 'rodolfo',
        apellido:'maraza',
        edad: 50,
    },
    // Metodos del objeto

    presentarse(){
        document.write(`hola mi nombre es ${this.nombre} y tengo ${this.edad} años soy ${this.sexo} `)
    },
    padrePresentarse(){
        document.write(`y mi padre es ${this.padre.nombre} ${this.padre.apellido} y tiene ${this.padre.edad} años`)
    }

}

alumno.presentarse();
alumno.padrePresentarse()


