#! /usr/bin/env node


// Countdown Timer Project
// In this project , you will build a countdown timer using the date module.

// date module install command
// npm install date-fns

// Start coding:

import { differenceInSeconds, DifferenceInSecondsOptions } from "date-fns";

// Function for countdown second
function* countdownTimer(second: number){
    // while loop
    while(second > 0) {
        yield second;
        second--;
    }
}

// Step 2 : counter inilization

let timerIterator = countdownTimer(20);

// Function to create a countdown timer
function displayCountdown() {

    // value below 10
    let result = timerIterator.next();

    // if else condition apply

    if (!result.done) {
        // Current date and time calls
        const now = new Date();

        const countdownTimer = new Date(now.getTime() + (result.value * 1000))

        // Calculate remaining seconds in time
        const remainingSeconds = differenceInSeconds(countdownTimer , now)
        console.log(`Remaining Seconds: ${remainingSeconds}`)

        setTimeout(displayCountdown, 1000)  // 1 second is equal to 1000 ms
        
    } else {
        // Display reasult countdown complete
        console.log("Countdown Complete!");
        
    }
}

//invoke
displayCountdown();