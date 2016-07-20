var http = require('http'),
    host = 'quotes.rest';

module.exports = {
    quote: (cb) => {
        return http.get({
            hostname: host,
            path: '/qod.json'
        }, (res) => {
            var data = '';

            res.on('data', (d) => {
                data += d;
            });

            res.on('end', () => {
                cb(JSON.parse(data).contents.quotes[0]);
            });
        });
    }
};