const sumAll = function(start, end) {
    let result = 0;

    if(start > end) {
        let temp = end;
        end = start;
        start = temp;
    }

    if(start < 0 || end < 0) {
        return 'ERROR';
    }

    if(typeof start != 'number' || typeof end != 'number') {
        return 'ERROR';
    }

    for(let i = start; i <= end; i++) {
        result = result + i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
