
const getTheTitles = function(books) {
    var a = [];
    for (i = 0; i < books.length; i++){
        a.push(books[i].title);
    }
    return a;
}

module.exports = getTheTitles;
