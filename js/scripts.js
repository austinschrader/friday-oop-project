// Business Logic
function Pizza() {
	this.toppings = [];
	this.size = [];
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
		let userToppings = $('#toppings').val();
		$('.userResults2').append(userToppings);
		console.log(userToppings);
		// numberTo(userInput);
	});
});
