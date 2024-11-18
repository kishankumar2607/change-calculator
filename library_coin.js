"use strict";

const coins = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0,

    // Method to calculate the number of coins based on the given cents
    makeChange(cents) {
        if (isNaN(cents) || cents < 0 || cents > 99) {
            throw new Error("Invalid input: Please enter a number between 0 and 99.");
        }

        // Calculate the number of each type of coin
        this.quarters = Math.floor(cents / 25);
        cents %= 25;
        

        this.dimes = Math.floor(cents / 10);
        cents %= 10;

        this.nickels = Math.floor(cents / 5);
        this.pennies = cents % 5;
    }
};
