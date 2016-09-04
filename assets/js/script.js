$(document).ready(function() {
	$('#mail').hover(
    function() {
        $(this).attr('src', 'assets/img/mail-icon2.png');
    },
    function() {
        $(this).attr('src', 'assets/img/mail-icon.png');
    });

    $('#github').hover(
    function() {
        $(this).attr('src', 'assets/img/github-icon2.png');
    },
    function() {
        $(this).attr('src', 'assets/img/github-icon.png');
    });

    $('#resume').hover(
    function() {
        $(this).attr('src', 'assets/img/resume-icon2.png');
    },
    function() {
        $(this).attr('src', 'assets/img/resume-icon.png');
    });
})