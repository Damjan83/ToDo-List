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

        $($btnEdit).on('click' , function() {
            if($btnEdit.html().toLowerCase() == 'edit') {
                $($taskInput).prop('readonly' , false);
                $($taskInput).focus();
                $($btnEdit).html('save');
            }else {
                $($taskInput).prop('readonly' , true);
                $($btnEdit).html('edit');
            }
        })

        $($btnDelete).on('click' , function() {
            $($taskInput).remove();
            $($btnEdit).remove();
            $($btnDelete).remove();
        })
    });
    
});





