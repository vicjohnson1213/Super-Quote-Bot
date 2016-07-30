var TwitterBot = require('node-twitterbot').TwitterBot,
    config = require('./config');

var bot = new TwitterBot({
    'consumer_secret': config.consumerSecret,
    'consumer_key': config.consumerKey,
    'access_token': config.accessToken,
    'access_token_secret': config.accessTokenSecret
});

module.exports = {
    tweet: function(message) {
        bot.tweet(message);
    }
};
