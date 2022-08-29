const removeFromArray = function() {
    array = arguments[0];
    let items = [];

    for(let i = 1; i < arguments.length; i++) {
        items.push(arguments[i]);
    }

    array = array.filter(arrayItem => !items.includes(arrayItem));
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
