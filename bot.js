var quotes = require('./quotes');
    twitter = require('./twitter');

var quote = quotes.next();

if (!quote)
    process.exit(1);

var tweet = `"${quote.quote}" - ${quote.author}`;

twitter.tweet(tweet);
