/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discussion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 *    1, 3, 2 - because step 2 happens during a snooze function (after a 
 *      timeout of 2 seconds)
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 *    1, 3, 2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 *    1, 2, 3 because step 2 doesn't have to "wait"; I was wrong it still was 
 *      delayed enough by the snooze function to come after step 3
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

