var cron = require('cron'),
    quotes = require('./quotes/quotes');
    twitter = require('./twitter');

var cron = cron.job('0 0 11 * * *', () => {
    var quote = quotes.next();

    if (!quote) {
        cron.stop();
        return
    }

    var tweet = `${quote.quote}`;

    if (quote.quote.length + quote.author.length + 3 <= 140) {
        tweet += ` - ${quote.author}`;
    }

    console.log(`Tweeting: ${tweet}`);
    // twitter.tweet(tweet);

}, () => {}, true, 'America/Denver');

console.log('Starting the bot!');
cron.start();