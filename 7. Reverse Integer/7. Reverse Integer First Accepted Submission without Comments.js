/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0)
        return x;
    
    let digitsOfInput = x.toString().split('');
    
    let digitsOfOutput = []
    
    while (digitsOfInput[digitsOfInput.length - 1] === '0')
        digitsOfInput.pop();
    
    if (digitsOfInput[0] === '-')
        digitsOfOutput[0] = digitsOfInput.shift();
    
    for (let i = 0; i < digitsOfInput.length; i++)
        digitsOfOutput[i + 1] = digitsOfInput[digitsOfInput.length - 1 - i];
    
    let output = digitsOfOutput.join('');
    if (output >= Math.pow(2, 31) || output < Math.pow(2,31) * -1)
        return 0;
    return output;
};