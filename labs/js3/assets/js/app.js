// $('.nav-item').click(function(){
// 	if($(this, hasClass('apple')){
// $`('.apple').removeClass('hide');
// 	} else if $(this). hasClass ('nike-button')) {
// 		$('.nike'). removeClass('hide');
// 	}
// });

// } else if ($this).hasClass ('disney-button')) {
// 	$('disney'). removeClass('hide'
// 	}
// });


// $('.nav-item').click(function() {
// 	var target_horse = $(this).data('horse');
// 	$(target_horse).removeClass('hide');
// });

	// if (target == 'apple')
	// 	img_to_show =  '<img class="apple" src="assets/img/apple.png" />';
	// 	} else if (target == 'nike') {
	// 	img_to_show = '<img class = nike" src="assets/img/nike.png" />';
	// 	} else if (target == 'disney') {
	// 	img_to_show = '<img class = disney" src="assets/img/disney.png" />';
	// 	} else if (target == 'vogue') {
	// 	img_to_show = '<img class = vogue" src="assets/img/vogue.png" />';


$('.nav-item').click(function(){
	var img = $(this).data('img');
	var class_name = $(this).data('classname');
	var img_to_show = '<div class="' + class_name + ' logo"><img src="assets/img/' + img + '" /> </div>';

	$('.content').prepend(img_to_show);

});



















