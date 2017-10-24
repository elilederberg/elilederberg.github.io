var cash = 10000;

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
	alert('not enough money');
}
}	


function update_wallet() {
$('.cash').html(cash);
}


// <!-- 4 different data types:
// string: (anything inside of single or double quotes)
// number: (any number from 0-9, can be whole or fractions)
// boolean: (when something is true or false, can be 0 (false) or 1 (true))
// array: (storage device used to contain all types of data) --> 