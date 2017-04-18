var random = Math.floor(Math.random() * 3 + 1);
var newArray = [];
var points = 0;
var matches = [];

// function startGame() {
// 	if (matches.indexOf("Creeper") > -1) {
// 		console.log(test);
// 	};	
// }
// startGame();

function flip(clicked_id) {
	// console.log(random);
	// console.log(clicked_id);
	// console.log(newArray);
	if (random == 1) {
		if (clicked_id == 'card1') {
			document.getElementById('card1').style.backgroundImage = "url('assets/Creeper.png')";
			newArray.push('Creeper');
		}else if (clicked_id == 'card2') {
			document.getElementById('card2').style.backgroundImage = "url('assets/Pickaxe.png')";
		newArray.push('Pickaxe');
		}else if (clicked_id == 'card3') {
			document.getElementById('card3').style.backgroundImage = "url('assets/Ocelot.png')";
		newArray.push('Ocelot');
		}else if (clicked_id == 'card4') {
			document.getElementById('card4').style.backgroundImage = "url('assets/Cake.png')";
		newArray.push('Cake');
		}else if (clicked_id == 'card5') {
			document.getElementById('card5').style.backgroundImage = "url('assets/Ocelot.png')";
		newArray.push('Ocelot');
		}else if (clicked_id == 'card6') {
			document.getElementById('card6').style.backgroundImage = "url('assets/Cake.png')";
		newArray.push('Cake');
		}else if (clicked_id == 'card7') {
			document.getElementById('card7').style.backgroundImage = "url('assets/Creeper.png')";
		newArray.push('Creeper');
		} else if (clicked_id == 'card8') {
			document.getElementById('card8').style.backgroundImage = "url('assets/Pickaxe.png')";
		newArray.push('Pickaxe');
		};
	}
	if (random == 2) {
		if (clicked_id == 'card1') {
			document.getElementById('card1').style.backgroundImage = "url('assets/Pickaxe.png')";
		newArray.push('Pickaxe');
		}else if (clicked_id == 'card2') {
			document.getElementById('card2').style.backgroundImage = "url('assets/Creeper.png')";
		newArray.push('Creeper');
		}else if (clicked_id == 'card3') {
			document.getElementById('card3').style.backgroundImage = "url('assets/Cake.png')";
		newArray.push('Cake');
		}else if (clicked_id == 'card4') {
			document.getElementById('card4').style.backgroundImage = "url('assets/Ocelot.png')";
		newArray.push('Ocelot');
		}else if (clicked_id == 'card5') {
			document.getElementById('card5').style.backgroundImage = "url('assets/Creeper.png')";
		newArray.push('Creeper');
		}else if (clicked_id == 'card6') {
			document.getElementById('card6').style.backgroundImage = "url('assets/Ocelot.png')";
		newArray.push('Ocelot');
		}else if (clicked_id == 'card7') {
			document.getElementById('card7').style.backgroundImage = "url('assets/Cake.png')";
		newArray.push('Cake');
		} else if (clicked_id == 'card8') {
			document.getElementById('card8').style.backgroundImage = "url('assets/Pickaxe.png')";
		newArray.push('Pickaxe');
		} 
		// else {
		// 	console.log("error");
		// }
	}
	if (random == 3) {
		if (clicked_id == 'card1') {
			document.getElementById('card1').style.backgroundImage = "url('assets/Ocelot.png')";
		newArray.push('Ocelot');
		}else if (clicked_id == 'card2') {
			document.getElementById('card2').style.backgroundImage = "url('assets/Cake.png')";
		newArray.push('Cake');
		}else if (clicked_id == 'card3') {
			document.getElementById('card3').style.backgroundImage = "url('assets/Creeper.png')";
		newArray.push('Creeper');
		}else if (clicked_id == 'card4') {
			document.getElementById('card4').style.backgroundImage = "url('assets/Pickaxe.png')";
		newArray.push('Pickaxe');
		}else if (clicked_id == 'card5') {
			document.getElementById('card5').style.backgroundImage = "url('assets/Pickaxe.png')";
		newArray.push('Pickaxe');
		}else if (clicked_id == 'card6') {
			document.getElementById('card6').style.backgroundImage = "url('assets/Creeper.png')";
		newArray.push('Creeper');
		}else if (clicked_id == 'card7') {
			document.getElementById('card7').style.backgroundImage = "url('assets/Ocelot.png')";
		newArray.push('Ocelot');
		} else if (clicked_id == 'card8') {
			document.getElementById('card8').style.backgroundImage = "url('assets/Cake.png')";
		newArray.push('Cake');
		}
	// var clicked_id = "";
	console.log(newArray);
	if (newArray.length == 2) {
		if (newArray[0] == newArray[1]) {
			points++;
			matches += newArray[0];
			newArray = [];
		} else {

			document.getElementById('card1').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card2').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card3').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card4').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card5').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card6').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card7').style.backgroundImage = "url('assets/Block.png')";
			document.getElementById('card8').style.backgroundImage = "url('assets/Block.png')";
			newArray = [];
			if (random == 1) {
				if (matches.indexOf("Creeper") > -1) {
					document.getElementById('card1').style.backgroundImage = "url('assets/Creeper.png')";
					document.getElementById('card7').style.backgroundImage = "url('assets/Creeper.png')";
				}
				if (matches.indexOf("Pickaxe") > -1) {
					document.getElementById('card2').style.backgroundImage = "url('assets/Pickaxe.png')";
					document.getElementById('card8').style.backgroundImage = "url('assets/Pickaxe.png')";
				}
				if (matches.indexOf("Ocelot") > -1) {
					document.getElementById('card3').style.backgroundImage = "url('assets/Ocelot.png')";
					document.getElementById('card5').style.backgroundImage = "url('assets/Ocelot.png')";
				}
				if (matches.indexOf("Cake") > -1) {
					document.getElementById('card4').style.backgroundImage = "url('assets/Cake.png')";
					document.getElementById('card6').style.backgroundImage = "url('assets/Cake.png')";
				}
			} else if (random == 2) {
				if (matches.indexOf("Creeper") > -1) {
					document.getElementById('card2').style.backgroundImage = "url('assets/Creeper.png')";
					document.getElementById('card5').style.backgroundImage = "url('assets/Creeper.png')";
				}
				if (matches.indexOf("Pickaxe") > -1) {
					document.getElementById('card1').style.backgroundImage = "url('assets/Pickaxe.png')";
					document.getElementById('card8').style.backgroundImage = "url('assets/Pickaxe.png')";
				}
				if (matches.indexOf("Ocelot") > -1) {
					document.getElementById('card4').style.backgroundImage = "url('assets/Ocelot.png')";
					document.getElementById('card6').style.backgroundImage = "url('assets/Ocelot.png')";
				}
				if (matches.indexOf("Cake") > -1) {
					document.getElementById('card3').style.backgroundImage = "url('assets/Cake.png')";
					document.getElementById('card7').style.backgroundImage = "url('assets/Cake.png')";
				}
			}
		}
		if (points == 4) {
			document.getElementById('score').innerHTML = 'You win!';
			document.getElementById('score').style.color = "lime";
		} else if (points == 3) {
			document.getElementById('score').innerHTML = 'Points = 3';
			document.getElementById('score').style.color = "black";
		} else if (points == 2) {
			document.getElementById('score').innerHTML = 'Points = 2';
			document.getElementById('score').style.color = "black";
		} else if (points == 1) {
			document.getElementById('score').innerHTML = 'Points = 1';
			document.getElementById('score').style.color = "black";
		} else {
			document.getElementById('score').innerHTML = 'Points = 0';
			document.getElementById('score').style.color = "black";
		}
	}
	console.log(points);
	}
}
