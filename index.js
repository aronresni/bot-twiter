const Twit = require("twit")

const T = new Twit({
    consumer_key: 'BCiH8TPJtpOBiDbtOj8OE5A4y',
    consumer_secret: 'QZfiHWqhoufcfHwCAUNH5T3xa8GTjYR2CpuX6clpBLfOrrFgNh',
    access_token: '1702835660275478528-NLmIBfsIF3V8C2zA0f9a6LvtBOolzU',
    access_token_secret: 'cNUpaKMLKH9zuLAytkL4HGIgSsrudkmJ139UH8PF90A5M',
    timeout_ms: 60 * 1000,
    strictSSL: true,
})

T.post('statuses/update', { status: 'hello world!' }, function (err, data, response) {
    console.log(data)
})


