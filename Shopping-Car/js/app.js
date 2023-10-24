const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];
cargarEventListeners();
function cargarEventListeners(){
     listaCursos.addEventListener('click', agregarCurso);
     carrito.addEventListener('click', eliminarCurso);
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
          carritoHTML();
     })
     vaciarCarritoBtn.addEventListener('click', () => {
          articulosCarrito = [];
          limpiarHTML();
     })
     }
function agregarCurso (eventoAddCurso) {
     eventoAddCurso.preventDefault();
     if ( eventoAddCurso.target.classList.contains ('agregar-carrito')){
          const cursoSeleccionado = eventoAddCurso.target.parentElement.parentElement;
          leerDatosCurso(cursoSeleccionado);
     }
}
function eliminarCurso(elimcurso) {
     if (elimcurso.target.classList.contains('borrar-curso')) {
          const cursoId = elimcurso.target.getAttribute('data-id');
          articulosCarrito = articulosCarrito.filter( cursel => cursel.idCurso !== cursoId);
          carritoHTML ();
     }
}
function leerDatosCurso (cursel) {
     console.log(cursel);
     const infoCurso = {
          imagen: cursel.querySelector('img').src,
          titulo: cursel.querySelector('h4').textContent,
          precio: cursel.querySelector('.precio span').textContent,
          idCurso: cursel.querySelector('a').getAttribute('data-id'),
          cantidad:1
     }
     const existe = articulosCarrito.some( cursel => cursel.idCurso === infoCurso.idCurso);
     if (existe) {
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
          articulosCarrito = [...articulosCarrito, infoCurso];
     }
     console.log(articulosCarrito);
     carritoHTML();
}
function carritoHTML () {
     limpiarHTML()
     articulosCarrito.forEach( (cursel) => {
     const {imagen, titulo, precio, cantidad, idCurso} = cursel;
     const row = document.createElement('tr');
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
     `;
     contenedorCarrito.appendChild(row);
});
     sycnStorage();
}
function sycnStorage() {
     localStorage.setItem('carrito',JSON.stringify(articulosCarrito));
}
function limpiarHTML () {
     while(contenedorCarrito.firstChild) {
          contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     }
}