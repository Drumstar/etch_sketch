$(document).ready(function(){
    $('button').click(function(){
         $('#container').empty();
        var height = prompt("Enter your height (less than 64)");
        var width = prompt("Enter your width (less than 64)");
        if (height > 64){
            alert("You can't make height more than 64!");
        }
        if (width > 64){
            alert("You can't make width more than 64!");
        }
        for (i=0; i<height; i++){
            $('#container').append('<ul></ul>');
        }
        for (i=0; i<width; i++){
            $('ul').append('<li></li>');
        }
        $('li').hover(function(){
           $(this).css('background-color', 'red');
        });
    });
});
