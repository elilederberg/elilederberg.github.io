$('.top-item') .click(function() {
	var button_name = $ (this).data('button');

	$('.top-item') .removeClass('active');
	$('.bottom-item').addClass('hide');
	$(this).addClass('active');

	if (button_name == 'blah') {
		$('.bottom-item.sad') .removeClass('hide');

	} else if (button_name == 'hyper') {
		$('.bottom-item.hap') .removeClass('hide');
	
	} else if (button_name == 'upset') {
		$('bottom-item.sad1') .removeClass('hide');
	}

});
