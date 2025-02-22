__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix : '/',
            namabot: 'ZZBot',
            namaowner: 'MR Bot',
            instagram: 'riski.pfp',
            youtube : 'MR_09'
        }
    }
    res.json(config)
})

module.exports = router
