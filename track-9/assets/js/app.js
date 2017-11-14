$('.button').hover(function() {
	// mouse in
    var target = $(this).data('target');
	$(target).removeClass('hide');
  }, function() {
  	// mouse out
  	var target = $(this).data('target');
    $(target).addClass('hide');
  }
);