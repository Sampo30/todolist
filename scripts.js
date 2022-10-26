// valitaan kaikki
//valitaan todo-form
const todoForm = document.querySelector(`.todo-form`);
// Valitaan input laatikko
const todoInput = document.querySelector('.todo-input');
// valitaan <ul> lista class="todo-items"
const todoItemsList = document.querySelector('.todo-items');

// array säilömään tehtävät
var todos = [];
// lisätään eventListener
todoForm.addEventListener(`submit`, function(event){
    event.preventDefault();
    addTodo(todoInput.value);
});

// Lisätään add Todo
function addTodo(item) {
    // if item is not empty
    if (item !== '') {
      // luo todo objecti, jolla on id, name, and completed properties
      const todo = {
        id: Date.now(),
        name: item,
        completed: false
      };
  // lisätään se todos arrayhin
      todos.push(todo);
      renderTodos(todos);
  // Tyhjennetään input box arvo
      todoInput.value = '';
    }
  }

// functio renderoimaan annetut todot näytölle
function renderTodos(todos) {
    // Tyhjentää kaiken <ul> listalla joilla class=todo-items
    todoItemsList.innerHTML = '';
  // käy läpi kaikki itemit todosissa
    todos.forEach(function(item) {
      // tarkista, että item on valmis
      const checked = item.completed ? 'checked': null;
  // luo <li> element ja täytä se
      // <li> </li>
      const li = document.createElement('li');
      // <li class="item"> </li>
      li.setAttribute('class', 'item');
      // <li class="item" data-key="1212121212"> </li>
      li.setAttribute('data-key', item.id);
      /* <li class="item" data-key="1212121212"> 
            <input type="checkbox" class="checkbox">
            Aamujumppa
            <button class="delete-button">X</button>
          </li> */
      // jos item on suoritettu, luo <li>:hin class 'checked', mikä lisää yliviivauksen
      if (item.completed === true) {
        li.classList.add('checked');
      }
  li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.name}
        <button class="delete-button">X</button>
      `;
      // lisää <li> <ul>:ään
      todoItemsList.append(li);
    });
  }
