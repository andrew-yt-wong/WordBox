startGame();

console.log(game);

$(document).ready(function() {
    $(document).on('submit', '#guess', function() {
    	let guess = $("#user-guess").val().toUpperCase();
        if (validateGuess(guess)) {
            validateGuess(guess);
            verifyGuess(guess);
            $("#user-guess").val("");
            let colors = colorifyGuess(guess);
            $("#list").append("<div><span style='color: " + colors[0] + ";'>" + guess[0] 
                + "</span><span style='color: " + colors[1] + ";'>" + guess[1] 
                + "</span><span style='color: " + colors[2] + ";'>" + guess[2] + "</span></div>");
        }

    	return false;
    });
});