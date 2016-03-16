$(document).ready(function() {
	$(".button").first().addClass('highlight');
	$(".sec").first().addClass('transition');

    $(".button").on('click', function(e) {
        e.preventDefault();

        $('.button').removeClass('highlight');
        $('.sec').removeClass('transition');

        $(this).addClass("highlight");

        var sec = $(this).find('+ .sec');
        sec.addClass('transition');
    });
})

