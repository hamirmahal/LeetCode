/**
 * @param {number} x
 * @return {number}
 */
/**var reverse = function(x) {
    // No matter what, it looks like I have to convert the input to a string so I can split
    // its contents so I can put each digit into an array.
    let arr = []
    // If the number is less than zero, i.e., it is negative...
    if (number < 0) {
        return 
    }
    // If the number is positive...
    if (number > 0) {
        return 
    }
    // If we reach this part of the function, the function's input must have been zero.
    return 0;
};

// Is converting the input to a string, first,
// and then splitting the string the most optimal way to do this?

// What if I just "mod" the number by the smallest power of ten larger than the number,
// then mod the input number by the next smallest power of ten, so on and so forth,
// until I just mod the input number by 10?

// Like, if the input was 527,391, I start by modding the number by 1,000,000.

// This equals the number itself, so I know to start initializing my answer with the input
// number mod the next lowest power of 10. Let me illustrate by saying we would
// mod the input, 527,391, by 100,000, next. This would give us 27,391.

// Wait, wait, wait. Let me start over.

// Start by modding by 10, then 100, and so on and so forth...

// So, with the same input, 527,391, I start by modding by 10. I get 1.

// This is the first digit of the output.

// So, I would have something like,
// let arr = []
// let index = 0
// arr[index++] = number mod 10
// Then, arr[0] = 1, index increments to 1, and... then what?

// I think I'm going to abandon this approach. Converting the input into a string,
// and then operating on that string seems like the most straightforward approach. */

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // If the input is zero, we return zero.
    if (x === 0)
        return x;
    
    // It looks like, no matter what, I have to convert the input into a string
    // to make its processing more feasible.
    let digitsOfInput = x.toString().split('');
    
    // It also looks like, no matter what, we need an intermediate
    // array for processing the output.
    let digitsOfOutput = []
    
    // The next part of this function removes trailing zeros because
    // they shouldn't appear in this function's output.
    while (digitsOfInput[digitsOfInput.length - 1] === '0')
        digitsOfInput.pop();    // I thought this was clever, when I came up with it.
    
    // If the input is negative, we transfer its negative sign to the first slot
    // of the output array.
    if (digitsOfInput[0] === '-')
        digitsOfOutput[0] = digitsOfInput.shift();
    
    // We can now process the digits as if we had received a positive number.
    // This function starts placing the output's digits in
    // digitsOfOutput[1], and not digitsOfOutput[0].
    
    // We reserve the first slot of digitsOfOutput[] for a negative sign
    // in case the input was negative.
    
    // This "for" loop processes the input from its least significant digit,
    // digitsOfInput[digitsOfInput.length - 1],
    // moving leftward to the input's leading digit,
    // placing each digit in the output,
    // starting from digitsOfOutput[1] because, remember,
    // we reserve digitsOfOutput[0] for '-' in case the input is negative.
    for (let i = 0; i < digitsOfInput.length; i++)
        digitsOfOutput[i + 1] = digitsOfInput[digitsOfInput.length - 1 - i];
    
    // If the reversed integer is too large, and by that I mean >= 2^31, or
    // if the reversed integer is too small, and by that I mean < -2^31, we return zero.
    let output = digitsOfOutput.join('');
    if (output >= Math.pow(2, 31) || output < Math.pow(2,31) * -1)
        return 0;
    return output;
};