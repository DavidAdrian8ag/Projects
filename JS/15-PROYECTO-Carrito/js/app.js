//? Variables

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

//? Crear "listeners"

cargarEventListeners();

function cargarEventListeners(){
     listaCursos.addEventListener('click', agregarCurso);                                       //* Click para agregar un item al carrito

     carrito.addEventListener('click', eliminarCurso);                                         //* Elimina curso

     vaciarCarritoBtn.addEventListener('click', () => {                                        //* Vaciar el carrito
          articulosCarrito = [];                                                               //* Se borra todo el arreglo

          limpiarHTML();                                                                       //* Se elimina todo el HTML
      })
     }

//? Funciones


//+ Función de encontrar el botón del para agregar al carrito

function agregarCurso (eventoAddCurso) {

     eventoAddCurso.preventDefault();

     if ( eventoAddCurso.target.classList.contains ('agregar-carrito')){                           //* Busca si se da click en lka clase q contenga "agregar-carrito"
          const cursoSeleccionado = eventoAddCurso.target.parentElement.parentElement;             //* Con esto se seleccionan los padres (el card completo), para poder escoger de alli la info deseada
          leerDatosCurso(cursoSeleccionado);
     }
}

function eliminarCurso(elimcurso) {
     if (elimcurso.target.classList.contains('borrar-curso')) {                                     //* Busca la clase q contiene "borrar curso"
          const cursoId = elimcurso.target.getAttribute('data-id');                                 //* Asigna el id de lo que se va aborrar

          articulosCarrito = articulosCarrito.filter( cursel => cursel.idCurso !== cursoId);        //* Filtra y reasigna si el curso es difernte

          carritoHTML ();                                                                           //* Iterar sobre el carrito y mostrar en html
     }
}


//+ Leer contenido HTML al que dimos click y extraer su información

function leerDatosCurso (cursel) {
     console.log(cursel);

     const infoCurso = {
          imagen: cursel.querySelector('img').src,                                             //* Se obtiene la imagen del curso
          titulo: cursel.querySelector('h4').textContent,                                      //* Se obtiene el titulo del curso
          precio: cursel.querySelector('.precio span').textContent,                            //* Se obtiene el precio
          idCurso: cursel.querySelector('a').getAttribute('data-id'),                          //* Se obtiene el id del curso
          cantidad:1                                                                           //* La cantidad de cursos
     }


     const existe = articulosCarrito.some( cursel => cursel.idCurso === infoCurso.idCurso);               //* Revisa si un elemento ya existe en el carrito

     if (existe) {
          // actualizamos cantidad

          const cursos = articulosCarrito.map ( cursel => {
               if (cursel.idCurso === infoCurso.idCurso) {
                    cursel.cantidad++;
                    return cursel;
               } else {
                    return cursel;
               }
          })
          articulosCarrito = [...cursos];

     } else {
          articulosCarrito = [...articulosCarrito, infoCurso];                                      //* Agrega elementos al arreglo del carrito con lo anterior
     }



     console.log(articulosCarrito);

     carritoHTML();

}

//? Mostrar carrito de compras en el HTML

function carritoHTML () {

     limpiarHTML()                                                                             //* Limpiamos el buffer para que no se dupliquen

     articulosCarrito.forEach( (cursel) => {                                                   //* Revisa para todos los cursos seleccionados

     const {imagen, titulo, precio, cantidad, idCurso} = cursel;

     const row = document.createElement('tr');                                                 //* Crea una tabla nueva

     row.innerHTML = `
     <td>
          <img src="${imagen}" width=130px>
     </td>
     <td>
          ${titulo}
     </td>
     <td>
          ${precio}
     </td>
     <td>
          ${cantidad}
     </td>
     <td>
          <a href="#" class="borrar-curso" data-id="${idCurso}">x</a>
     </td>
     `;                                                                                        //* En cada tabla se le agrega lo que está en la tabla

     contenedorCarrito.appendChild(row);                                                       //* Agrega el HTML del cartito en el tbody
});
}


//? Elimina los cursos del tbody

function limpiarHTML () {

     //*Forma lenta
     //contenedorCarrito.innerHTML = '';

     while(contenedorCarrito.firstChild) {                                                     //* Revisa si hay "hijos" y en caso de q si, los borra
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}
