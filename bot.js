var schedule = require('node-schedule'),
    quotes = require('./quotes');
    twitter = require('./twitter');

var sched = schedule.scheduleJob({ minute: 11, hour: 11 }, function() {
    var quote = quotes.next();

    if (!quote) {
        sched.cancel();
        return;
    }

    var tweet = '"' + quote.quote + '" - ' + quote.author;

    twitter.tweet(tweet);
});
