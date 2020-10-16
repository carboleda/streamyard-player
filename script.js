$('#playerVisibility').click(function() {
    const isVisible = ($(this).attr('visible')) == 'true';
    console.log(this, isVisible, $(this).attr('visible'));
    $(this).attr('visible', !isVisible);
    $('#player').css({
        display: isVisible ? 'none' : 'block'
    });
});