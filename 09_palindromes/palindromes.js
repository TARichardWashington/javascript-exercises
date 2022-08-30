const palindromes = function (forwardString) {
    forwardString = forwardString.split('').
                        filter(item => (item != '!' && item != ',' && item != ' ' && item != '.')).
                        join('').toLowerCase();
    
    let backwardString = forwardString.split('').reverse().join('');

    if(backwardString === forwardString) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
