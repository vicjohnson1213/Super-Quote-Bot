var fs = require('fs');

function readQuotes() {
    var quotes = fs.readFileSync('./quotes/quotes.json');

    return JSON.parse(quotes);
}

function nextQuote() {
    var quotes = readQuotes();

    if (quotes.length === 0) 
        return null;
        
    var idx = Math.floor(Math.random() * quotes.length)
        chosen = quotes.splice(idx, 1);

    fs.writeFileSync('./quotes/quotes.json', JSON.stringify(quotes));

    return chosen[0];
}

module.exports = {
    next: nextQuote
};