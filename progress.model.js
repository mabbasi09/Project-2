var progressModel = (function(){	
	//to store each users nutrients and amounts
	var nutrients = {}; 

	//user defined goal for nutrient intake
	var target = {};

	//user entered weight
	var myWeight = 0;

	//function for creating bar chart from nutrients data
	function drawChart(nutrients, unit){
		//store global variable for local use
		var nums = nutrients;

		//create array of key and values for data method
		var elems = d3.keys(nums);
		var values = d3.values(nums);
		
		//remove previous chart to add updated one
		d3.select("svg").remove();

		var svg = d3.select("div#barChart").append("svg")
			.attr("height", "50%")
			.attr("width", "100%");

		//add chart properties using amount data points
		svg.selectAll("rect")
			.data(values)
			.enter().append("rect")
				.attr("class", "bar")
				.attr("height", function(d, i) {return (d * 2)})
				.attr("width", "40")
				.attr("x", function(d, i) {return (i * 80) + 550})
				.attr("y", function(d, i) {return 200 - (d * 2)});

		//add text properties to bars
		svg.selectAll("text")
		    .data(elems)
		    .enter().append("text")
		    .text(function(d) {return (d + "\n" + "(" + unit + ")")})
		    	.attr("class", "label")
		        .attr("x", function(d, i) {return (i * 80) + 550})
		        .attr("y", function(d, i) {return 190 - (values[i] * 2)});

	}

	//add a selected nutrient and amount to users nutrients object
	function addNutr(nutr, unit, amount){
		amount = parseInt(amount);

		if(nutr in nutrients){
			nutrients[nutr] += amount;
		}
		else {
			nutrients[nutr] = amount;
		}

		drawChart(nutrients, unit);

		console.log("You have added " + amount + " " + unit + " of " + nutr + "!.")
		console.log(nutrients);
	};

	//specify a nutrient and amount to remove from object
	function removeNutr(nutr, unit, amount){
		amount = parseInt(amount);

		if (nutr in nutrients){
			if(nutrients[nutr] < amount){
				console.log("You have removed all " + nutr + "!.");
				nutrients[nutr] = 0;
			}
			else {
				nutrients[nutr] -= amount;

				console.log("You have removed " + amount + " " + unit + " of " + nutr + ", "
				+ "you still have " + nutrients[nutr] + " left!.");
				console.log(nutrients);
			}
		}

		else {
			console.log("There are none of this nutrient");
		}
		drawChart(nutrients);
	};

	function erase(){
		nutrients = {};
		drawChart();
	};

	//user defined goal for nutrient and amount
	function setGoal(nutr, amount){
		target.nutr = amount;
	};

	//user updates current weight
	function setWeight(weight){
		myWeight = weight;
		$("div#weight").text(weight);
	};


	return {
		addNutr: addNutr,
		removeNutr: removeNutr,
		erase: erase,
		setGoal: setGoal,
		setWeight: setWeight,
	};

})();//end model
