"use strict";

$(document).ready(() => {
    $("#calculate").click(() => {
        try {
            // Get and validate the number of cents from the user
            let cents = Math.floor(parseInt($("#cents").val()));

            // Create a new Coins object
            if (isNaN(cents) || cents < 0 || cents > 99) {
                alert("Please enter a valid number between 0 and 99");
                return;
            }

            // Use the makeChange method from the coins object
            coins.makeChange(cents);

            // Display the results
            $("#quarters").val(coins.quarters);
            $("#dimes").val(coins.dimes);
            $("#nickels").val(coins.nickels);
            $("#pennies").val(coins.pennies);

            // Set focus on cents text box
            $("#cents").focus();
        } catch (error) {
            alert(error.message);
        }
    });

    // Set focus on cents text box on initial load
    $("#cents").focus();
});
