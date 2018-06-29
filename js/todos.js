$('ul').on("click","li",function () {   // on click is used to provide effect on all elemnts
    $(this).toggleClass("complete");   // toggling between the list by a line through
});

$("ul").on("click","span",function(event){     // deleting a li element whenever a users clicks on X
$(this).parent().fadeOut(1000,function(){      // parent()is used to get parent of span which is li
$(this).remove();
});
event.stopPropagation(); // used to avoid contionius firing of two events
});

$("input").keypress(function(event){     // adding a new todo
if(event.which===13){  // code for enter key

    var todoText= $(this).val();
    $(this).val("");   // set the text field empty after the key has been pressed
$('ul').append("<li><span> < </span> " + todoText  +"</li>");
}
});
$(".fa-pencil").click(function(){
    $("input").fadeToggle();
});