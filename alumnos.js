/**************************************************** 
Funciones para mostrar y ocultar elemtos del DOM 
****************************************************/
function vistaListado(){    
    
    let inscripciones = document.getElementById("inscripciones");
    let materias = document.getElementById("materias");
    let grupos = document.getElementById("grupos");
    let listado = document.getElementById("listado"); 
    listado.style.display=''; 
    inscripciones.style.display = 'none';
    materias.style.display = 'none';
    grupos.style.display = 'none';  
    
    actualizarListado();

}

function vistaInscripciones(){
    let inscripciones = document.getElementById("inscripciones");
    let materias = document.getElementById("materias");
    let grupos = document.getElementById("grupos"); 
    let listado = document.getElementById("listado"); 
    listado.style.display='none'; 
    inscripciones.style.display = '';
    materias.style.display = 'none';
    grupos.style.display = 'none';    

}

function vistaMaterias(){
    let inscripciones = document.getElementById("inscripciones");
    let materias = document.getElementById("materias");
    let grupos = document.getElementById("grupos"); 
    let listado = document.getElementById("listado"); 
    listado.style.display='none'; 
    inscripciones.style.display = 'none';
    materias.style.display = '';
    grupos.style.display = 'none'; 
    
    listarNombres();

}


function vistaGrupos(){
    let inscripciones = document.getElementById("inscripciones");
    let materias = document.getElementById("materias");
    let grupos = document.getElementById("grupos"); 
    let listado = document.getElementById("listado"); 
    listado.style.display='none'; 
    inscripciones.style.display = 'none';
    materias.style.display = 'none';
    grupos.style.display = '';    

}

/**************************************************** 
FINAL de Funciones para mostrar y ocultar 
****************************************************/

const alumnos = [
                    {id: 1, firstName: "Jaime", lastName: "Hernández", age: 34}
                ];

/**************************************************** 
    CLASE ALUMNOS
****************************************************/
class Alumno{
    
    constructor(id,firstName, lastName, age){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

}

/**Funcion para Ingresar un nuevo alumno */
function newStudent(){
    let id = alumnos.length + 1;
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let group = '';
    let subject = '';
    let qualification = '';

    let alumno = new Alumno(id,firstName,lastName,age,group,subject,qualification);

    alumnos.push(alumno);
    
    localStorage.setItem("studentList", JSON.stringify(alumnos));

    actualizarListado();
    
    limpiarInscripcion();

}


/**Funcion para mostrar los datos ingresados en la tabla tbAlumnos */
function actualizarListado(){
    let tbAlumnos = document.getElementById('tbAlumnos');
    let listadoActual = JSON.parse(localStorage.getItem("studentList"));
    tbAlumnos.innerHTML = '';

    for(let i = 0; i < listadoActual.length; i++){

        let index = listadoActual[i].id - 1;
        tbAlumnos.innerHTML = tbAlumnos.innerHTML + 
        '<tr>' +
            '<td>' + listadoActual[i].id + '</td>' +
            '<td>' + listadoActual[i].firstName + '</td>' +
            '<td>' + listadoActual[i].lastName + '</td>' +
            '<td>' + listadoActual[i].age + '</td>' +
            '<td>' + listadoActual[i].group + '</td>' +
            '<td>' + listadoActual[i].subject + '</td>' +
            '<td>' + listadoActual[i].qualification + '</td>' +
            '<td><div class="btn-group btn-group-sm"><button type="button" class="btn btn-danger" onclick="asignarMateria('+alumnos[0]+')">Asignar Grupo</button><button type="button" class="btn btn-warning">Asignar Materia</button><button type="button" class="btn btn-success">Asignar Calificación</button></div></td>'
        '</tr>';
    }
}


/**Funcion para limpiar los inputs del formulario */
function limpiarInscripcion(){
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('age').value = '';
    Swal.fire({
        icon: 'success',
        title: 'Alumno Inscrito',
        showConfirmButton: false,
        timer: 1500
      }).then((result) => {
        vistaListado();
      })    
}


function asignarMateria(index){
    console.log(index)
}
