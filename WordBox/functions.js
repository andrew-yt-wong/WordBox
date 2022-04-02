let game = [];
let guessed = [false, false, false, false, false, false];

function startGame() {
	game = gb3[Math.floor(Math.random() * gb3.length)];

	game.push(game[0][0] + game[1][0] + game[2][0]);
	game.push(game[0][1] + game[1][1] + game[2][1]);
	game.push(game[0][2] + game[1][2] + game[2][2]);

	for (let i = 0; i < game.length; ++i)
		game[i] = game[i].toUpperCase();

	$("#letter1").text(game[0][0]);
	$("#letter2").text(game[0][1]);
	$("#letter3").text(game[0][2]);
	$("#letter4").text(game[1][0]);
	$("#letter5").text(game[1][1]);
	$("#letter6").text(game[1][2]);
	$("#letter7").text(game[2][0]);
	$("#letter8").text(game[2][1]);
	$("#letter9").text(game[2][2]);

	let reveal = Math.floor(Math.random() * 9) + 1;
	$("#letter" + reveal.toString()).css("color", "rgba(0, 0, 0, 1)");
}

function validateGuess(guess) {
	return wb3.includes(guess.toLowerCase());
}

function verifyGuess(guess) {
	if (guess == game[0] && !guessed[0]) {
		$("#letter1").css("color", "rgba(0, 0, 0, 1)");
		$("#letter2").css("color", "rgba(0, 0, 0, 1)");
		$("#letter3").css("color", "rgba(0, 0, 0, 1)");
	}
	else if (guess == game[1] && !guessed[1]) {
		$("#letter4").css("color", "rgba(0, 0, 0, 1)");
		$("#letter5").css("color", "rgba(0, 0, 0, 1)");
		$("#letter6").css("color", "rgba(0, 0, 0, 1)");
	}
	else if (guess == game[2] && !guessed[2]) {
		$("#letter7").css("color", "rgba(0, 0, 0, 1)");
		$("#letter8").css("color", "rgba(0, 0, 0, 1)");
		$("#letter9").css("color", "rgba(0, 0, 0, 1)");
	}
	else if (guess == game[3] && !guessed[3]) {
		$("#letter1").css("color", "rgba(0, 0, 0, 1)");
		$("#letter4").css("color", "rgba(0, 0, 0, 1)");
		$("#letter7").css("color", "rgba(0, 0, 0, 1)");
	}
	else if (guess == game[4] && !guessed[4]) {
		$("#letter2").css("color", "rgba(0, 0, 0, 1)");
		$("#letter5").css("color", "rgba(0, 0, 0, 1)");
		$("#letter8").css("color", "rgba(0, 0, 0, 1)");
	}
	else if (guess == game[5] && !guessed[5]) {
		$("#letter3").css("color", "rgba(0, 0, 0, 1)");
		$("#letter6").css("color", "rgba(0, 0, 0, 1)");
		$("#letter9").css("color", "rgba(0, 0, 0, 1)");
	}
	else {
		if ($("#attempts").text() != '0')
			$("#attempts").text((parseInt($("#attempts").text()) - 1).toString());
		else
			$("#attempts").text('YOU LOSE');
	}
}

function colorifyGuess(guess) {
	let scores = [0, 0, 0, 0, 0, 0];
	let colors = ['black', 'black', 'black'];

	for (let i = 0; i < game.length; ++i) {
		let count = 0;
		if (guess[0] == game[i][0])
			++count;
		if (guess[1] == game[i][1])
			++count;
		if (guess[2] == game[i][2])
			++count;
		if (game[i].includes(guess[0]))
			count += 0.5;
		if (game[i].includes(guess[1]))
			count += 0.5;
		if (game[i].includes(guess[2]))
			count += 0.5;
		scores[i] = count;
	}

	let index = scores.indexOf(Math.max(...scores));
	for (let i = 0; i < game[index].length; ++i)
		if (guess[i] == game[index][i] && !guessed[index])
			colors[i] = 'green';
	for (let i = 0; i < game[index].length; ++i)
		for (let j = 0; j < game[index].length; ++j)
			if (i != j && game[index][i] == guess[j] && colors[j] != 'green' && colors[i] != 'green' && !guessed[index])
				colors[j] = '#EDAE49';
		// if (game[index].includes(guess[i]) && colors[i] != 'green')
		// 	colors[i] = '#EDAE49';
	if (scores[index] > 4)
		guessed[index] = true;
	for (let i = 0; i < game.length; ++i) {
		if (guess[0] == game[i][0] && colors[0] != 'green' && colors[0] != '#EDAE49' && !guessed[i]) 
			colors[0] = '#9C89B8';
		if (guess[1] == game[i][1] && colors[1] != 'green' && colors[1] != '#EDAE49' && !guessed[i])
			colors[1] = '#9C89B8';
		if (guess[2] == game[i][2] && colors[2] != 'green' && colors[2] != '#EDAE49' && !guessed[i])
			colors[2] = '#9C89B8';
	}
	for (let i = 0; i < game.length; ++i) {
		if (game[i].includes(guess[0]) && colors[0] != 'green' && colors[0] != '#EDAE49' && colors[0] != '#9C89B8' && !guessed[i])
			colors[0] = '#D1495B';
		if (game[i].includes(guess[1]) && colors[1] != 'green' && colors[1] != '#EDAE49' && colors[1] != '#9C89B8' && !guessed[i])
			colors[1] = '#D1495B';
		if (game[i].includes(guess[2]) && colors[2] != 'green' && colors[2] != '#EDAE49' && colors[2] != '#9C89B8' && !guessed[i])
			colors[2] = '#D1495B';
	}

	return colors;
}