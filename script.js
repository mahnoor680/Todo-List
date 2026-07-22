const todolist = [{
     name: 'Make dinner',
     dueDate: '2026-07-21',
     completed: false
}, {
    name : 'Wash dishes',
    dueDate : '2026-07-21',
    completed: false
}];

renderTodoList();
function renderTodoList(){

    let todolistHTML = '';

    for(let i = 0; i<todolist.length; i++){
        const todoObject = todolist[i];
       // const name = todoObject.name;
        //const dueDate = todoObject.dueDate;
         const {name,dueDate} = todoObject;
        const html = `
        <input type="checkbox"
        ${todoObject.completed?'checked':''}
        onchange= "
            todolist[${i}].completed = this.checked;
            renderTodoList();
        ">
        <div style = "${todoObject.completed? 'text-decoration: line-through; color: gray;' : ''}">
            ${name}
        </div>
        <div style = "${todoObject.completed? 'text-decoration: line-through; color: gray;' : ''}">
            ${dueDate}
        </div>
        <button onclick="
            todolist.splice(${i},1);
            renderTodoList();
        " class= "delete-todo-button">Delete</button>
     `;
        todolistHTML += html;
    }

        document.querySelector('.js-todo-list')
        .innerHTML = todolistHTML;
}

function addTodo(){
    const inputElement = document.querySelector('.js-name-input');
    const name = (inputElement.value);

    const dateInputElement = document.querySelector('.js-due-date-input');
    const dueDate = dateInputElement.value;
    if(name === '' || dueDate === ''){
    return;
}
    inputElement.value = '';

    todolist.push({
        name: name,
        dueDate: dueDate,
        completed: false
// shorthand name,dueDate
    }
    );
    dateInputElement.value = '';

    renderTodoList();
}
