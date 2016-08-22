var quotes = require('./quotes'),
    twitter = require('./twitter'),
    argv = require('minimist')(process.argv.slice(2));

var quote = quotes.next(argv);

if (!quote)
    process.exit(1);

var tweet = `"${quote.quote}" - ${quote.author}`;

twitter.tweet(tweet);
