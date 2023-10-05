document.addEventListener('DOMContentLoaded', function() {
     const email = {
          email: '',
          //cc1: '',
          asunto: '',
          mensaje: '',
     }
     const inputEmail = document.querySelector('#email');
     const inputEmailcc = document.querySelector('#cc1');
     const inputAsunto = document.querySelector('#subject');
     const inputMensaje = document.querySelector('#message');
     const formulario = document.querySelector('#formulario');
     const btnSubmit = document.querySelector('#formulario button[type="submit"]');
     const btnReset = document.querySelector('#formulario button[type="reset"]');
     const spinner = document.querySelector('#spinner');
     inputEmail.addEventListener('input', validar);
     inputEmailcc.addEventListener('input', validar);
     inputAsunto.addEventListener('input', validar);
     inputMensaje.addEventListener('input', validar);
     formulario.addEventListener('submit', enviarEmail);
     btnReset.addEventListener('click', function(eventfillbox) {
          eventfillbox.preventDefault();
          resetFormulario();
     });
     function enviarEmail(eventfillbox) {
          eventfillbox.preventDefault();
          spinner.classList.add('flex');
          spinner.classList.remove('hidden');
          setTimeout(() => {
               spinner.classList.remove('flex');
               spinner.classList.add('hidden');
               resetFormulario();
               const alertaExito = document.createElement('P');
               alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
               alertaExito.textContent = 'Mensaje enviado correctamente';
               formulario.appendChild(alertaExito);
               setTimeout(() => {
                    alertaExito.remove();
               }, 3000);
          },3000)
     }
     function validar (eventfillbox) {
          if (eventfillbox.target.value.trim() === '') {
               mostrarAlerta(`${eventfillbox.target.id} is mandatory`, eventfillbox.target.parentElement);
               email[eventfillbox.target.name] = '';
               comprobarEmail();
               return;
          }
          if ( eventfillbox.target.id === 'email' && !validarEmail(eventfillbox.target.value)) {
               mostrarAlerta('This is NOT an email valid account', eventfillbox.target.parentElement);
               email[eventfillbox.target.name] = '';
               comprobarEmail();
               return;
          }
          limpiarAlerta(eventfillbox.target.parentElement);
          email[eventfillbox.target.name] = eventfillbox.target.value.trim().toLowerCase();
          comprobarEmail();
     }
     function mostrarAlerta(mensaje, referencia){
          const alerta = referencia.querySelector('.bg-red-600');
          if (alerta) {
               alerta.remove();
          }
          const error = document.createElement('P');
          error.textContent = mensaje;
          error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
          referencia.appendChild(error)
     }
     function limpiarAlerta (referencia) {
          const alerta = referencia.querySelector('.bg-red-600');
          if (alerta) {
               alerta.remove();
          }
     }
     function validarEmail (email) {
          const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
          const resultado = regex.test(email);
          return resultado;
     }
     function comprobarEmail () {
          if (Object.values(email).includes('')) {
               btnSubmit.classList.add('opacity-50');
               btnSubmit.disabled = true;
               return;
          }
          btnSubmit.classList.remove('opacity-50');
          btnSubmit.disabled = false;
     }
     function resetFormulario () {
          email.email = '';
          email.cc1 = '';
          email.asunto = '';
          email.mensaje = '';
          formulario.reset();
          comprobarEmail();
     }
});
