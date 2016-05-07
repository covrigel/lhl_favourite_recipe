$(document).ready(function() {
  $('.hide').click(function() {
        var $hide = $('img');
        $hide.fadeOut('slow');
    });
  $('.show').click(function() {
        var $show = $('img');
        $show.fadeIn('slow');
    });
});