var cron = require('cron'),
    quote = require('./quote'),
    twitter = require('./twitter');

var cron = cron.job('0 0 11 * * *', () => {
    var q = quote.quote((q) => {
        var tweet = `${q.quote}`;

        if (q.quote.length + q.author.length + 5 <= 140) {
            tweet += ` - ${q.author}`;
        }

        console.log(`Tweeting: ${tweet}`);
        twitter.tweet(tweet);
    });
}, () => {}, true, 'America/Denver');

console.log('Starting the bot!');
cron.start();