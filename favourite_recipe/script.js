$(document).ready(function() {
  $('.hide').click(function() {
        var $hide = $('img');
        $hide.fadeOut('slow');
    });
  $('.show').click(function() {
        var $show = $('img');
        $show.fadeIn('slow');
    });
  $('.change').click(function() {
		$(this).toggleClass("onIt");
	});
  $('.strike').click(function() {
    $(this).toggleClass("lineThrough");
  });
});