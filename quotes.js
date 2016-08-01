var fs = require('fs'),
    path = require('path');

function readQuotes() {
    var quotes = fs.readFileSync(path.join(__dirname, 'quotes/quotes.json'));

    return JSON.parse(quotes);
}

function saveQuotes(quotes) {
    fs.writeFileSync(path.join(__dirname, 'quotes/quotes.json', JSON.stringify(quotes)));
}

function nextQuote(opts) {
    var quotes = readQuotes();

    if (quotes.length === 0) 
        return null;
        
    var idx = Math.floor(Math.random() * quotes.length)
        chosen = quotes.splice(idx, 1);

    if (opts && opts.save) {
        saveQuotes(quotes);
    }

    return chosen[0];
}

module.exports = {
    next: nextQuote
};
