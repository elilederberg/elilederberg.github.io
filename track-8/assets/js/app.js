// $('.blah').click(function() {
// 	$('.blah-options').removeClass('hide');
// });

// $('.hyper').click(function() {
// 	$('.hyper-options').removeClass('hide');
// });

// $('.upset').click(function() {
// 	$('.upset-options').removeClass('hide');
// });

$('.button').click(function() {
	var target = $(this).data('target');
	$(target).removeClass('hide');
});