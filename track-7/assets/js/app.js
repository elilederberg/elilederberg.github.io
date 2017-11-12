$('.nav-item').click(function() {
	var button_name = $(this).data('button');

	$('.content').attr('class', 'column content');
	$('.content').addClass(button_name);

	$('.nav-item').removeClass('active');
	$('.anx-text').addClass('hide');
	$(this).addClass('active');

	$('.text').addClass('hide');

	if (button_name == 'ang') {
		$('.lightbox.ang').removeClass('hide');
	
	} else if (button_name =='anx') {
		$('.anx-text').removeClass('hide');
	
	} else if (button_name == 'dep') {
		$('.dep-text').removeClass('hide');
	
	} else if (button_name == 'store') {
		$('.store-text').removeClass('hide');
	
	} else if (button_name == 'man') {
		$('.lightbox.man').removeClass('hide');
	
	} else if (button_name == 'euph') {
		$('.lightbox.euph').removeClass('hide');
	}
});

$('.close-button').click(function() {
	$('.lightbox').addClass('hide');
	$('.nav-item.ang').removeClass('active');
});
