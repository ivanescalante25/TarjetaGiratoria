$(document).ready(function(){
    var nirvanaLogo = ".nirvana_logo";
    var nirvanaBand = ".nirvana_band";

    $(nirvanaLogo).click(function(){
        $('.flip_box').toggleClass('flipped');
        return false;

    });

    $(nirvanaBand).click(function(){
        $('.flip_box').toggleClass('flipped');
        return false;

    });


});