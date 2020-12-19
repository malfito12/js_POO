import Curso from "./clases/Curso.js"
import Profesor from "./clases/Profesor.js"
import Alumno from "./clases/Alumno.js"
import Usuario from "./clases/Usuario.js"

//Instaciar objetos de la clase curso

// const html = new Curso('HTML desde cero','https://staticuestudio.blob.core.windows.net/buhomag/2016/03/01195417/pexels-com.jpg', 10)
// const css = new Curso('CSS desde cero','https://staticuestudio.blob.core.windows.net/buhomag/2016/03/01195417/pexels-com.jpg', 8)
// const javascript = new Curso('JS desde cero','https://staticuestudio.blob.core.windows.net/buhomag/2016/03/01195417/pexels-com.jpg', 8)

const elem= document.getElementById('cursos')

//imprime un curso en el DOm
//recibe in objeto de tipo curso

function mostrarCurso(n){
    const hijo=document.createElement(`div`)
    hijo.classList.add('card')

    elem.appendChild(hijo)

    hijo.innerHTML=`
    <div class="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        <img src="${n.getPoster()}" alt="${n.getNombre()}"/>
    </div>
    <div class="card__data s-border s-radius-br s-radius-bl s-pxy-2">
        <h3 class="t5 s-mb-2 s-center">${n.getNombre()}</h3>
        <div class="s-center">
            <span class="small">${n.getClases()}</span>
        </div>
    </div>
    `
    
}

//llamadad a la funcion mostrar curso

// mostrarCurso(html)
// mostrarCurso(css)
// mostrarCurso(javascript)

const formulario=document.getElementById(`formCursos`)

formulario.addEventListener('submit',e=>{
    e.preventDefault()
    const target=e.target;
    const curso=new Curso(target.nombreCurso.value, target.posterCurso.value, target.clasesCurso.value)
    mostrarCurso(curso)
})



// const profe= new Profesor('Alex','Maraza','alex@gmail.com',true,['HTML','CSS'],51)

const usuario=document.getElementById('formUsuarios')

usuario.addEventListener('submit', e=>{
    e.preventDefault()
    const target=e.target;
    const usuario=new Usuario(target.usuNombre.value, target.usuApellido.value, target.usuCorreo.value, target.usuSitu.value)
    mostrarUsuario(usuario)
})

function mostrarUsuario(usu){
    const hijo=document.createElement('ul')
    hijo.classList.add('data-list')

    usuario.appendChild(hijo)

    hijo.innerHTML=`
        <ul data-list >
            <li>Nombre: ${usu.getNombres()}<br> Apellido: ${usu.getApellidos()}<br> Correo: ${usu.getCorreo()}<br> Actitud: ${usu.getActivo()}</li>
        </ul>
    `
}



// const alum= new Alumno('Mario','Manriquez','maria@gmail.com',false,['HTML','CSS'])

// const html= new Curso('HTML desde cero', 'mi-poster.png',7)

// html.setInscritos([...html.getInscritos(),alum])

// console.log(html)


