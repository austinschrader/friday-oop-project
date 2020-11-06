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
	}

	return cost;
};

// Front End Logic
$(document).ready(function () {
	$('#formOne').submit(function () {
		event.preventDefault();
		let userInput = $('#userInput').val();
		$('.userResults').append(userInput);
		numberTo(userInput);
	});
});
