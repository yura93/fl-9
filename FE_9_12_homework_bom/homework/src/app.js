const root = document.getElementById('root');
const todoItems = [{
    isDone: 'assets/img/todo-s.png',
    id: 12345,
    description: 'Todo 1'
}];
createMainPage(todoItems, root);
window.addEventListener('hashchange', function() {
    if (location.hash === '') {
        createMainPage(todoItems, root);
    } else if (location.hash === '#add') {
        createAddPage(todoItems, root, location.hash.substring(1));
    } else {
        createModifyPage(todoItems, root, location.hash);
    }
});

function createMainPage(arr, parentContainer) {
    removeAllChildren(parentContainer);
    let thumbnails = createElement('div', 'thumbnails');
    let divContainer = createElement('div', 'flex');
    thumbnails.appendChild(createElement('h1', 'h1', 'Simple TODO aplication'));
    let add = thumbnails.appendChild(createElement('button', 'add', 'Add new task'));
    thumbnails.appendChild(divContainer);
    for (let i = 0; i < arr.length; i++) {
        let item = createElement('div', 'item');
        add.setAttribute('title', 'add task');
        let isDone = createElement('img');
        let description = createElement('div', 'description', arr[i].description);
        let buttonDelete = createElement('button', 'delete', 'cancel');
        isDone.setAttribute('src', arr[i].isDone);
        divContainer.appendChild(item);
        item.appendChild(isDone);
        item.appendChild(description);
        item.appendChild(buttonDelete);
        add.addEventListener('click', function() {
            location.hash = 'add';
        });
        description.addEventListener('click', function() {
            location.hash = '#/modify/' + arr[i].id;
        });
        buttonDelete.addEventListener('click', function() {
            delete arr[i];
            location.hash = '';
        });
    }
    parentContainer.appendChild(thumbnails);
}

function createAddPage(arr, parentContainer, tank) {
    removeAllChildren(parentContainer);
    let addDiv = createElement('div', 'addDiv');
    addDiv.appendChild(createElement('h1', 'h1', 'Add task'));
    let input = addDiv.appendChild(createElement('input', 'input', 'Add task'));
    let backLink = createElement('button', 'back', 'Cancel');
    backLink.addEventListener('click', function() {
        location.hash = '';
    });
    backLink.setAttribute('href', '#');
    let addChanges = createElement('button', 'addChanges', 'Save changes');
    addChanges.addEventListener('click', function() {
        todoItems.push({
            isDone: 'assets/img/todo-s.png',
            description: input.value,
            id: 2
        });
        location.hash = '';
    });
    addDiv.appendChild(addChanges);
    addDiv.appendChild(backLink);
    parentContainer.appendChild(addDiv);
}

function createModifyPage(arr, parentContainer, todo) {
    for (let i = 0; i < arr.length; i++) {
        if (todo === '#/modify/' + arr[i].id) {
            removeAllChildren(parentContainer);
            let addDiv = createElement('div', 'addDiv');
            let inputValue = todoItems[i].description;
            root.appendChild(createElement('h1', 'h1', 'Modify item'));
            let input = root.appendChild(createElement('input', 'input', inputValue));
            let addChanges = createElement('a', 'addChanges', 'Save changes');
            addChanges.addEventListener('click', function() {
                todoItems[i] = {
                    isDone: 'assets/img/todo-s.png',
                    description: input.value
                };
                location.hash = '';
            });
            let backLink = createElement('button', 'back', 'Cancel');
            backLink.addEventListener('click', function() {
                location.hash = '';
            });
            backLink.setAttribute('href', '#');
            addDiv.appendChild(addChanges);
            addDiv.appendChild(backLink);
            parentContainer.appendChild(addDiv);
        }
    }
}

function removeAllChildren(parentContainer) {
    while (parentContainer.hasChildNodes()) {
        parentContainer.removeChild(parentContainer.lastChild);
    }
}

function createElement(element, className, textContent) {
    let tmp = document.createElement(element);
    if (className !== undefined) {
        tmp.className = className;
    }
    if (textContent !== undefined) {
        tmp.textContent = textContent;
    }
    return tmp;
}
