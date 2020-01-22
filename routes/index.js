var express = require('express');
var router = express.Router();
const YouTube = require('simple-youtube-api');
const youtube = new YouTube('AIzaSyBn3OBC0IInMJPlG-l0ikE9xdRapkmiAII');
/* AIzaSyB60QmT5YyioKvTARP1KrBvOlcArG0EWNI*/


const videoJson = require('../jsonvideo.json');

router.get('/', function(req, res, next) {
    res.render('index');
});

router.post('/search', function(req, res, next) {

    youtube.searchVideos(req.body.search, 10)
    .then(results => {
        res.render('video', { results, searchKey: req.body.search });
    })
    .catch(console.log);

    /* res.render('video', { results: videoJson.videos, searchKey: req.body.search }); */

});

module.exports = router;
