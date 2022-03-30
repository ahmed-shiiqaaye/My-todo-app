let input = document.querySelector('.input');
let addBtn = document.querySelector('.addBtn');
let todoList = document.querySelector('.todo-list');

todoList.addEventListener('click',deletecheck)

let counter = 0;
addBtn.addEventListener('click',()=>{
   if(input.value === ''){
       alert('you must put some thing of the file')
   }else{
       counter++
        // create element
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo-item');
    todoList.appendChild(todoDiv);

    let newLi = document.createElement('li');
    newLi.textContent = `${counter}: ${input.value}`;
    newLi.classList.add('li')
    todoDiv.appendChild(newLi);

    let trashBtn = document.createElement('button');
    trashBtn.innerHTML = `<i class="i fa fa-trash"><i/>`;
    trashBtn.classList.add('trash')
    todoDiv.appendChild(trashBtn)

    let completeBtn = document.createElement('button');
    completeBtn.innerHTML = `<i class="i fa fa-check"><i/>`;
    completeBtn.classList.add('complete')
    todoDiv.appendChild(completeBtn)

    input.value = '';
   }
})

function deletecheck(e){
    const item = e.target;
    if(item.classList[0] === "trash"){
        item.parentElement.remove();
    }
    if(item.classList[0] === "complete"){
        let todopar = item.parentElement;
        todopar.classList.toggle('highlight')
    }
}