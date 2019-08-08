
const palindromes = function(string) { // compares lhs and rhs of a string and returns true if all of them match.
    processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
    return(
    processedString
        .split("")
        .reverse()
        .join("") == processedString
    );

};

module.exports = palindromes;
