startGame();

console.log(game);

$(document).ready(function() {
    $("#guess1").focus();

    $("#guess1").keyup(function(event) {
        if ($("#guess1").val().length == 1) {
            $("#guess2").focus();
            $("#guess1").attr("readonly", "true");
        }
    });

    $("#guess2").on("click", function() {
        if ($("#guess1").val().length != 1) {
            $("#guess1").focus();
        }
    });

    $("#guess2").keydown(function(event) {
        if (event.which == 8) {
            $("#guess1").removeAttr("readonly");
            $("#guess1").val("");
            $("#guess1").focus();
        }
    });

    $("#guess2").keyup(function(event) {
        if ($("#guess2").val().length == 1) {
            $("#guess3").focus();
            $("#guess2").attr("readonly", "true");
        }
    });

    $("#guess3").on("click", function() {
        if ($("#guess2").val().length != 1) {
            if ($("#guess1").val().length != 1) {
                $("#guess1").focus();
            }
            else {
                $("#guess2").focus();
            }
        }
    });

    $("#guess3").keydown(function(event) {
        if (event.which == 8) {
            if ($("#guess3").val().length != 1) {
                $("#guess2").removeAttr("readonly");
                $("#guess2").val("");
                $("#guess2").focus();
            }
        }
    });

    $("#guess3").keyup(function(event) {
        if ($("#guess3").val().length == 1) {
            // let guess = $("#user-guess").val().toUpperCase();
            let guess = ($("#guess1").val() + $("#guess2").val() + $("#guess3").val()).toUpperCase();
            if (validateGuess(guess)) {
                validateGuess(guess);
                verifyGuess(guess);
                // $("#user-guess").val("");
                $("#guess1").val("");
                $("#guess2").val("");
                $("#guess3").val("");
                $("#guess1").removeAttr("readonly");
                $("#guess2").removeAttr("readonly");
                $("#guess1").focus();

                let colors = colorifyGuess(guess);
                $("#list").prepend("<div><span style='color: " + colors[0] + ";'>" + guess[0] 
                    + "</span><span style='color: " + colors[1] + ";'>" + guess[1] 
                    + "</span><span style='color: " + colors[2] + ";'>" + guess[2] + "</span></div>");

                $("#" + guess[0].toLowerCase()).css("background", colors[0]);
                $("#" + guess[1].toLowerCase()).css("background", colors[1]);
                $("#" + guess[2].toLowerCase()).css("background", colors[2]);
            }
        }
        // else if (event.which == 8) {
        //     if ($("#guess3").val().length != 1) {
        //         $("#guess2").removeAttr("readonly");
        //         $("#guess2").val("");
        //         $("#guess2").focus();
        //     }
        // }
    });

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