const leapYears = function(year) {
    let isLeapYear = false;

    if(year % 100 === 0 && year % 400 !== 0) {
        return false;
    }

    isLeapYear = year % 4 === 0;
    return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
