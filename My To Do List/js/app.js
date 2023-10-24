const formulary = document.querySelector('#formu');
const taskList = document.querySelector('#do-list');
let toDoList = [];
eventListeners();
function eventListeners () {
     formulary.addEventListener('submit', addToList);
     taskList.addEventListener('click', deleteTask);
     document.addEventListener('DOMContentLoaded', () => {
          toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
          createHTML();
     });
}
function addToList (event) {
     event.preventDefault();
     const task = document.querySelector('#task').value;
     if (task === '') {
          showEmpty('You did not add anything to the list')
          return;
     }
     const taskObjt = {
          id: Date.now(),
          task
     }
     toDoList = [...toDoList, taskObjt];
     createHTML()
     formulary.reset();
}
function showEmpty (error) {
     const errorMessage = document.createElement('p');
     errorMessage.textContent = error;
     errorMessage.classList.add('error');
     const contenent = document.querySelector('#contenido');
     contenent.appendChild(errorMessage);
     setTimeout(() => {
          errorMessage.remove();
     }, 3000);
}
function createHTML() {
     cleanHTML();
     if (toDoList.length > 0) {
          toDoList.forEach( task => {
               const btnDelete = document.createElement('a');
               btnDelete.classList.add('delete-task');
               btnDelete.innerText = 'X';
               btnDelete.onclick = () => {
                    deleteTask(task.id);
               }
               const li = document.createElement('li');
               li.innerText = task.task;
               li.appendChild(btnDelete);
               taskList.appendChild(li);
          })
     }
     syncStorage ();
}
function syncStorage () {
     localStorage.setItem('toDoList', JSON.stringify(toDoList));
}
function deleteTask(id){
     toDoList = toDoList.filter( task => task.id !== id);
     createHTML();
}
function cleanHTML() {
     while( taskList.firstChild) {
          taskList.removeChild(taskList.firstChild);
     }
}