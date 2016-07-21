# Super Quote Bot

> A bot to get the a quote of the day and tweet it.

## Setup

In order for the bot to work, you need to go to [Twitter](https://twitter.com) and create an account for your bot.  Then go to [Twitter Apps](https://apps.twitter.com) and create a new App and get an access token for that app.

Once you have an app and an access token for it, you can create a `config.js` file with the following format:

```javascript
// config.js
module.exports = {
    consumerKey: "Your consumer key",
    consumerSecret: "Your consumer secret",
    accessToken: "Your app's access token",
    accessTokenSecret: "Your app's access token secre"
};
```

Note that the bot is set up to tweet every day at 11:00 Mountain time.  This can be changed using [`cron` syntax](https://en.wikipedia.org/wiki/Cron).

## Running

once that is done, you can start the app with the following commands:

```bash
npm install
npm start
```

## License

MIT

Copyright (c) 2016 Victor Johnson vicjohnson1213@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.