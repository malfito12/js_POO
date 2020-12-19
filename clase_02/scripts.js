//FUNCION CONSTRUCTORA

// function Usuario(nombres, apellidos, correo, activo){
//     this.nombres =nombres,
//     this.apellidos=apellidos,
//     this.correo=correo,
//     this.activo=activo
    
// }

// const alex= new Usuario('alex','maraza', 'alex@gmail.com', true)

// let str=JSON.stringify(alex)

// var la=``;
// for(var e in alex){
//     la+=alex[e]+ `\n`
// }

// document.write(JSON.stringify(alex))

//FUNCION CLASS

class Usuario{
    constructor(nombres, apellidos, correo, activo){
        this.nombres =nombres,
        this.apellidos=apellidos,
        this.correo=correo,
        this.activo=activo
    }

    presentarse(){
        return `hola soy ${this.nombres} ${this.apellidos}`
    }
    
    getNombres(){
        return this.nombres;
    }
    getApellidos(){
        return this.apellidos;
    }

    setNombres(Nuevonombres){
        this.nombres=Nuevonombres;
    }


}
const alex= new Usuario('alex','maraza', 'alex@gmail.com', true)
// document.write(JSON.stringify(alex))
alex.setNombres("lili")
document.write(`hola soy ${alex.getNombres()} ${alex.getApellidos()}`)

