// Business Logic
function Pizza(toppings, size) {
	this.toppings = [];
	this.size = '';
}

let userPizza = new Pizza();

Pizza.prototype.calcPizza = function (Pizza) {
	let cost = 0;

	if (this.size === 'large') {
		cost = 20;
	} else if (this.size === 'medium') {
		cost = 10;
	} else if (this.size === 'small') {
		cost = 5;
	} else {
		return 0;
	}

	return cost;
};

function domLogUserInput(userToppings, userSize, cost) {
	$('.userResultsDetail')
		.empty()
		.append(
			'You ordered a ' +
				userSize +
				' pizza with the following toppings: ' +
				userToppings +
				' and the charge for the pizza is : $' +
				cost
		);
}

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();

		let userToppings = $('#userToppings').val();
		let userSize = $('#userSize').val();

		userPizza.size = userSize;
		userPizza.toppings = userToppings;

		let cost = userPizza.calcPizza(userPizza);

		domLogUserInput(userToppings, userSize, cost);

		$('.userResults').show();
	});
});
