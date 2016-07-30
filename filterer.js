var fs = require('fs'),
    path = require('path');

fs.readFile(path.join(__dirname, process.argv[2]), (err, data) => {
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
