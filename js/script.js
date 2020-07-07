$(function() {

    $('.some_link').on('click', function(e) {
        $('html,body').stop().animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
        e.preventDefault();
    });
});
// **************************************************
function ajaxFormRequest(form_id, form_area_id) {
    var forma = $("#" + form_id);
    var form_area = $("#" + form_area_id);
    var resp_text = $('#area_after_form_send');

    forma.submit(function() {
        $.ajax({
            type: "POST",
            url: "php/callback.php",
            data: $(this).serialize()
        }).done(function() {
            form_area.hide();
            resp_text.css('display', 'block');
        });
        return false;
    })

}