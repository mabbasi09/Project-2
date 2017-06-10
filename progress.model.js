
	var progressModel = (function(){	
		//to store each users nutrients and amounts
		var nutrients = {};

		//user defined goal for nutrient intake
		var target = {};

		//user entered weight
		var myWeight = 0;

		//add a selected nutrient and amount to users nutrients object
		function addNutr(nutr, unit, amount){

			if(nutr in nutrients){
				nutrients.nutr += amount;
			}
			else {
				nutrients[nutr] = amount;
			}
			console.log("You have added " + amount + " " + unit + " of " + nutr + "!.")
			console.log(nutrients);


			//return true;
		};

		//specify a nutrient and amount to remove from object
		function removeNutr(nutr, unit, amount){

			if (nutr in nutrients){
				if(nutrients.nutr < amount){
					console.log("You have removed all " + nutr + "!.");
					nutrients.nutr = 0;
				}
				else {
					this.nutr -= amount;

					console.log("You have removed " + amount + " " + unit + " of " + nutr + ", "
					+ "you still have " + this.nutr + " left!.");
					console.log(nutrients);
				}
			}
			else {
				console.log("There are none of this nutrient");
			}
		};

		//user defined goal for nutrient and amount
		function setGoal(nutr, amount){
			target.nutr = amount;
		};

		//user updates current weight
		function setWeight(weight){
			myWeight = weight;
		};

		var listeners = [];



		return {
			addNutr: addNutr,
			removeNutr: removeNutr,
			setGoal: setGoal,
			setWeight: setWeight,
		};

	})();//end model
