

$( document ).ready(function() {

      $.get( "https://test-f8640-default-rtdb.europe-west1.firebasedatabase.app/food.json", function( data ) {
        $(data).each(function(i) {
            console.log(data)
        })
    });
 

    $('#todo__form').on('submit' , function(e) {
        e.preventDefault();
        let $task = $('#todo__input');
        if(!$task.val()){
            alert('Please fill out the task');
            return;
        } 

        let $taskEle = $('<div/>').addClass('task');
        let $taskInput = $('<input>' , {type: 'text' , class: 'text'}).prop('readonly' , true);
        $($taskInput).val($task.val())
        $($taskEle).append($taskInput);

        let $btnEdit = $('<button/>').addClass('edit').html('edit');
        let $btnDelete = $('<button/>').addClass('delete').html('delete');
        $($taskEle).append($btnEdit);
        $($taskEle).append($btnDelete);

        let $taskCheckCont = $('<div/>').addClass('container');
        let $taskCheck = $('<input>' , {type: 'checkbox' , id: 'checkbox' });
        let $taskCheckSpan = $('<span/>').addClass('checkmark');
        $($taskEle).append($taskCheckCont);
        $($taskCheckCont).append($taskCheck);
        $($taskCheckCont).append($taskCheckSpan);
        $($taskCheck).on('click' , function() {
            $($taskEle).css({opacity: 0.5})
        })

        $('.todo__tasks').append($taskEle);
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
            $($taskCheck).remove();
        })
    });
    
});





