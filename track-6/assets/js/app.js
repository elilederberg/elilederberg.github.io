var cash = 8000;

update_wallet ();

$('.item').click(function() {
	var item= $(this).data('item'),
	amount= $(this).data('amount');

	charge_card(amount, item);
});



function charge_card(amount, item) {

	if (cash >= amount) {
	cash= cash - amount;
	update_wallet();
	$('.closet-items').prepend(item + ', ');
	} else {
	alert('Not Enough Time and Energy');
}
}	


function update_wallet() {
$('.cash').html(cash);
}