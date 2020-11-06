// Business Logic
function Pizza(toppings, size) {
	this.toppings = [];
	this.size = '';
}

Pizza.prototype.calcPizza = function (Pizza) {
	let cost = 0;

	if (this.size === 'Large') {
		cost = 20;
	} else if (this.size === 'Medium') {
		cost = 10;
	} else if (this.size === 'Small') {
		cost = 5;
	}

	return cost;
};

let userPizza = new Pizza();

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();

		let userToppings = $('#userToppings').val();
		let userSize = $('#userSize').val();

		$('.userResultsDetail')
			.empty()
			.append(
				'You ordered a ' +
					userToppings +
					' pizza with the following toppings: ' +
					userSize +
					''
			);

		userPizza.size = userSize;
		userPizza.toppings = userToppings;
		$('.userResults').show();
	});
});
