const caesar = function(string, shift) {
    const char = string.split(""); // string is now an array of chars stored in char;
    for(let i = 0; i < char.length(); ++i)
    {
        if(isAplha(char[i]) char[i] = charShift(char[i], shift);
    }
    char.join("");
    return char;
}

function isAlpha(char){ // returns whether current character is letter or not;
    const code = char.charCodeAt();
    return (code >= 65 && code <= 90 || code >= 97 && code <= 122);
}

function startCode(code => code < 97 ? 65 : 97); // returns starting charCode; if letter is UPPERCASE
// it returns 65 else returns 97; we need this value so we can tackle the situation in which shifting
// will get out of range.

function charShift(letter, shift){
    var code = letter.charCodeAt();
    var start = startCode(code);
    var end = start + 25;
    var ans;
    if(code - shift < start)
        ans = end - shift;
            else
            ans = code - shift;
    return String.fromCharCode(ans);
}


module.exports = caesar
