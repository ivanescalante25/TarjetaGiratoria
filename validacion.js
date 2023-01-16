$(document).ready(function(){
    var nirvanaLogo = ".nirvana_logo";

    $(nirvanaLogo).click(function(){
        $('.flip_box').toggleClass('flipped');
        return false;

    });

});