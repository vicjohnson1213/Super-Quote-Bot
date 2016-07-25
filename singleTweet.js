var quotes = require('./quotes');
    twitter = require('./twitter');

var quote = quotes.next();

if (!quote) {
    cron.stop();
    return;
}

var tweet = `"${quote.quote}"`;

if (quote.quote.length + quote.author.length + 3 <= 140) {
    tweet += ` - ${quote.author}`;
}

twitter.tweet(tweet);
