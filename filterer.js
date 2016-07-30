var fs = require('fs');

fs.readFile('quotes.json', function(err, data) {
    if (err) return;

    var quotes = JSON.parse(data);
    console.log('Starting quotes:', quotes.length);

    quotes = quotes.filter(funciton(quote) => {
        return quote.author.length + quote.quote.length + 5 <= 140;
    });

    fs.writeFile('quotes.json', JSON.stringify(quotes), function(err) {
        console.log('Ending quotes:', quotes.length);
    });
});
