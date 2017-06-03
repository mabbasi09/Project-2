//to store each users nutrients and amounts
var nutrients = {};
//user entered weight
var myWeight = 0;

//add a selected nutrient and amount to users nutrients object
function addNutr(nutr, amount){
	if(nutr in nutrients){
		nutrients.nutr += amount;
	}
	else {
		nutrients.nutr = amount;
	}
};

//specify a nutrient and amount to remove from object
function removeNutr(nutr, amount){
	if(nutrients.nutr < amount){
		nutrients.nutr = 0;
	}
	else {
		nutrients.nutr -= amount;
	}
};

//user defined goal for nutrient and amount
function setGoal(nutr, amount){
	var item = nutr;
	var goal = amount;
};

//user updates current weight
function setWeight(weight){
	myWeight = weight;
};

//return user weight
function getWeight(){
	return myWeight;
};