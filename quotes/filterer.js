var fs = require('fs');

fs.readFile('quotes.json', (err, data) => {
    if (err) return;

    var quotes = JSON.parse(data);
    console.log('Starting quotes:', quotes.length);

    quotes = quotes.filter((quote) => {
        return quote.author.length + quote.quote.length + 5 <= 140;
    });

    fs.writeFile('quotes.json', JSON.stringify(quotes), (err) => {
        console.log('Ending quotes:', quotes.length);
    });
});
