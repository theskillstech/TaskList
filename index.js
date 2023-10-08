let todoList = [
    {
        item:'Buy Milk',
        duedate:'8/10/23'
    },
    {
        item:'Go To Office',
        duedate:'8/10/23'
    }];
displayItems();
function addTodo () {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#date-input');
    let tudoItem = inputElement.value;
    let tudodate = dateElement.value;
    todoList.push({item:tudoItem,
        duedate:tudodate});
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){
    let containertodo = document.querySelector('.container-todo');

    let newshtml = '';
    // displayElement.innerText = '';
    for(i=0; i<todoList.length; i++){
        // let item = todoList[i].item;
        // let duedate = todoList[i].duedate;
        let {item, duedate} = todoList[i];
        newshtml += `
        
        <span> ${item}</span>
        <span> ${duedate}</span>
        <button id='dltbtn' onclick="todoList.splice(${i},1);displayItems();"> Delete </button>
       `;
        
        // displayElement.innerText = displayElement.innerText + ' \n' + todoList[i];
    }
  containertodo.innerHTML = newshtml;  
}
