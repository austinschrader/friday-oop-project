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

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userToppings = $('#userToppings').val();
		let userSize = $('#userSize').val();
		$('.userResults2').empty().append(userSize);
		$('.userResults2').append(userToppings);
		let userPizza = new Pizza();
		userPizza.size = userSize;
		userPizza.toppings = userToppings;
		$('.userResults').show();
		console.log(userPizza);
		// console.log(userToppings);
		// userPizza.calcPizza(userPizza);
	});
});
