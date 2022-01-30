$( document ).ready(function() {
    
    var envelope = $('#envelope');
    var letterWrapper = $('.letter-wrapper');
    var letter = $('.letter');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    
    envelope.click( function() {
        open();
    });
    letter.click(function(){
        letter.toggleClass('clicked');
        letterWrapper.toggleClass('clicked');
    });
    btn_open.click( function() {
        open();
    });
    btn_reset.click( function() {
        close();
    });

    function open() {
        envelope.addClass("open")
        .removeClass("close");
    }
    function close() {
        envelope.addClass("close")
        .removeClass("open");
        letter.removeClass('clicked');
        letterWrapper.removeClass('clicked');
    }

});