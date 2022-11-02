$( document ).ready(function() {
    $('#todo__form').on('submit' , function(e) {
        e.preventDefault();
        let $task = $('#todo__input');
        if(!$task.val()){
            alert('Please fill out the task');
            return;
        } 

        let $taskELe = $('<div/>').addClass('task');
        let $taskInput = $('<input>' , {type: 'text' , class: 'text'}).prop('readonly' , true);
        $($taskInput).val($task.val())
        $($taskELe).append($taskInput);

        let $btnEdit = $('<button/>').addClass('edit').html('edit');
        let $btnDelete = $('<button/>').addClass('delete').html('delete');
        $($taskELe).append($btnEdit);
        $($taskELe).append($btnDelete);
        
        $('.todo__tasks').append($taskELe);
        $($task).val('');
    });
    
});
// window.addEventListener('load' , function() {
//     const form = document.querySelector('#todo__form');
//     const input = document.querySelector('#todo__input');
//     const tasks = document.querySelector('.todo__tasks');

//     form.addEventListener('submit' , function(e) {
//         e.preventDefault();
//         const task = input.value;
//         if(!task) {
//             alert('Please fill out the task');
//             return;
//         }

//         const taskEle = document.createElement('div');
//         taskEle.classList.add('task');

//         const taskInput = document.createElement('input');
//         taskInput.classList.add('text');
//         taskInput.type = 'text';
//         taskInput.value = task;
//         taskInput.setAttribute('readonly' , 'readonly');
//         taskEle.appendChild(taskInput);

//         const btnEdit = document.createElement('button');
//         btnEdit.classList.add('edit');
//         btnEdit.innerHTML = 'edit';
//         const btnDelete = document.createElement('button');
//         btnDelete.classList.add('delete');
//         btnDelete.innerHTML = 'delete';
//         taskEle.appendChild(btnEdit)
//         taskEle.appendChild(btnDelete)

//         tasks.appendChild(taskEle);
//         input.value = '';

//         btnEdit.addEventListener('click' , function() {
//             if(btnEdit.innerHTML.toLowerCase() == 'edit') {
//                 taskInput.removeAttribute('readonly');
//                 taskInput.focus();
//                 btnEdit.innerHTML = 'save';
//             } else {
//                 taskInput.setAttribute('readonly' , 'readonly');
//                 btnEdit.innerHTML = 'edit'               
//             }     
//         })

//         btnDelete.addEventListener('click' , function() {
//             taskEle.removeChild(taskInput)
//             taskEle.removeChild(btnEdit)
//             taskEle.removeChild(btnDelete)
//         })
//     })
// })




