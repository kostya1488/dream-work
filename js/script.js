$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 400, 'linear');
});
// **********************************************************************
function ajaxFormRequest(form_id) {
    var forma = $("#" + form_id);
    forma.submit(function() {
        $.ajax({
            type: "POST",
            url: "php/callback.php",
            data: $(this).serialize()
        }).done(function() {
            forma.hide()
            $('#area_after_form_send').style.display = "flex";
        });
        return false;
    })
}