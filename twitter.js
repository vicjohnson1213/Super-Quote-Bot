var Twitter = require('twitter'),
    config = require('./config');

var bot = new Twitter({
    'consumer_secret': config.consumerSecret,
    'consumer_key': config.consumerKey,
    'access_token_key': config.accessToken,
    'access_token_secret': config.accessTokenSecret
});

module.exports = {
    tweet: (message) => {
        bot.post('statuses/update', {status: message}, (error, tweet, response) => {});
    }
};
