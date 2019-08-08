const fibonacci = function(number) {
    if(number < 0) return "OOPS";
    number = Number(number);
    var first = 1, second = 1, current;
    for(let i = 3; i <= number; i ++)
    {
        current = first + second;
        first = second;
        second = current;
    }
    return current;
}

module.exports = fibonacci
