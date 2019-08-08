const reverseString = function(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}

module.exports = reverseString
