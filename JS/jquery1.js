
$(document).ready(function(){
console.log("psicologia infantil");

// $('li').css("background","yellow" );


$('li').click(function(){

    $(this).addClass('resaltar');

})

$('li').dblclick(function(){
    $(this).addClass('resaltar2');
})


});



