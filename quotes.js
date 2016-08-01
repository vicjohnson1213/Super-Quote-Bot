var fs = require('fs'),
    path = require('path'),
    merge = require('merge');

function readQuotes(src) {
    var quotes = fs.readFileSync(path.join(__dirname, src));

    return JSON.parse(quotes);
}

function saveQuotes(quotes, src) {
    fs.writeFileSync(path.join(__dirname, src), JSON.stringify(quotes));
}

function nextQuote(opts) {
    opts = merge({
        save: false,
        src: 'quotes/quotes.json'
    }, opts);


    var quotes = readQuotes(opts.src);

    if (quotes.length === 0) 
        return null;
        
    var idx = Math.floor(Math.random() * quotes.length),
        chosen = quotes.splice(idx, 1);

    if (opts.save) {
        saveQuotes(quotes, opts.src);
    }

    return chosen[0];
}

module.exports = {
    next: nextQuote
};
