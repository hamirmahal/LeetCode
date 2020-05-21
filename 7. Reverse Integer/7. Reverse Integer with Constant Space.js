/**
 * @param {number} x
 * @return {number}
 * I think my previous solution runs in log_10 (n) time.
 * I looked at the solution to this problem on LeetCode,
 * which had a thorough explanation and an implementation of 
 * that explanation in C++ and Java.
 * That solution ran in log_10 (n) time.
 * I am now going to try applying what I've learned to write
 * another log_10 (n) approach to this problem in JavaScript.
 * I want to see which one performs better, i.e., which approach has
 * smaller constants.
 */
var reverse = function(x) {
    let reversedInteger = 0;
    
    while (x !== 0) {
        let nextDigitOfReverse = x % 10;
        x = Math.trunc(x/10);
    
        // This conditional checks for overflow.
        if (reversedInteger >  214748364 || 
            (reversedInteger ===  214748364 && nextDigitOfReverse > 7) ||
            reversedInteger < -214748364 ||
            (reversedInteger === -214748364 && nextDigitOfReverse < -8))
            return 0;
        
        reversedInteger *= 10;
        reversedInteger += nextDigitOfReverse;
    }
    
    // If the input just so happened to be zero, the reverse function would just return
    // zero, since that is the value to which I initialized reversedInteger at
    // the start of the function. So, we receive the desired output in that case.
    return reversedInteger;
};