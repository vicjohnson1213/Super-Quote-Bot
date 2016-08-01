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

Then, for testing you can add a temporary quotes file at `quotes/quotes.json`.  An example would look like the following:

```json
[
    {
        "author": "Abraham Lincoln",
        "quote": "You can't believe everything you read on the internet."
    }
]
```

## Running

Once you have your authentication tokens, you can send a quote by running the following commands:

```bash
npm install
node bot.js
```

## Scheduling

You can also schedule this to run at specified intervals or at a specific time each day using your operating systems cron jobs (for unix operating systems).  Viewing and editing cron jobs is done via the `crontab` command.

#### Viewing Cron Jobs

Cron jobs can be viewed by running `crontab -l`.  This just prints the contents of the cron file.

#### Editng Cron Jobs

Cron jobs can be added/removed/edited using the `crontab -e` command.  The first time you run this it will ask you which editor you prefer to use, select one and the cron file will open.  Take a loot at [this tutorial](http://kvz.io/blog/2007/07/29/schedule-tasks-on-linux-using-crontab/) to familarize yourself with cron.

To use cron for this Twitter-bot, add a line to your cron file that looks like the following:

```crontab
# Runs the command ad 11:11 every morning.
11 11 * * * /path/to/node /path/to/super-quote-bot/bot.js
```

## License

MIT

Copyright (c) 2016 Victor Johnson vicjohnson1213@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.