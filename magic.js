//hero
var hero = "Jake";
var gender = "male";
var age = 25;
var weapon = "sword";
var pronoun ;

function thePronoun() {
	if (gender == "male"){
		pronoun = "he";
	} else if (gender == "female") {
		pronoun = "she";
	}
}
thePronoun();

var output ;
function heroAge() {
	if (age < 18) {
		output = "is just beginning";
	} else if (age >= 21 && age <= 40) {
		output = "has seen a few battles";
	} else if (age > 40) {
		output = "has lived through many epic battles";
	}
}
heroAge();

function theHero() {
	return hero + " is our lovable hero, who " + output + " with his trusty " + weapon + "."
}
console.log(theHero())




//Lights 
var lights = Boolean(5 == 3);

function Light() {
	if (lights == true) {
		console.log("And then there was light.");
	} else {
		console.log("Lights out.");
	}
}
Light();
