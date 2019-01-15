let men = [
	 {
	 	name: 'Socrates',
        // used this to test too (commented out next line when uncommented this one): mortal: false,
       mortal: true,
		dead: true,
	},
	{
		name: 'Trump',
		mortal: true,
		dead: false,
	}
];
// another test case:men = [];

let man;
let immortalManFound=false;
let socratesIsMortal;
let mortalDescription;
let deadDescription;
for (var i=0; i<men.length; i++) {
	man = men[i];
	if (man.mortal) {
		mortalDescription = " is mortal";
	} else {
		mortalDescription = " is immortal";
		immortalManFound = true;
	}
	deadDescription = " and is " + (man.dead?"dead":"alive");
	console.log(man.name + mortalDescription + deadDescription);
	if (man.name==='Socrates') {
		if (man.mortal) {
			socratesIsMortal = true;
		} else {
			socratesIsMortal = false;
		}
	}
}
if (men.length===0) {
	console.log("No men found");
} else if (immortalManFound) {
	console.log("Some men ARE immortal!");
} else {
	console.log("All men are mortal.");
}

if (socratesIsMortal) {
	console.log('And socrates IS mortal');
} else if (socratesIsMortal === false) { // as opposed to undefined
	console.log('And socrates is NOT mortal');
} else {
	console.log('I am not sure if Socrates is mortal or not');
}
console.log("But Socrates' ideas will live for ever");