var schedule = require('node-schedule'),
    quotes = require('./quotes');
    twitter = require('./twitter'),
    winston = require('winston');

winston.add(winston.transports.File, { filename: 'log.log' });
winston.remove(winston.transports.Console);

winston.info('Starting the application.');

var sched = schedule.scheduleJob({ minute: 11, hour: 11 }, () => {
    var quote = quotes.next();

    winston.info(`chose quote "${quote.quote}"`);

    if (!quote) {
        winston.info('no quote found.');
        sched.cancel();
        return;
    }

    var tweet = `"${quote.quote}" - ${quote.author}`;

    winston.info('about to tweet');
    twitter.tweet(tweet);
    winston.info('just tweeted');
});
