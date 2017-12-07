var YandexMusicApi = require('../lib/yandex-music-api'),
    config = require('./config');

var api = new YandexMusicApi();

api.init(config.user)    
    .then(function() {

        api.getTrack('19622155:2149542').then(function(result) {
            console.log(result)
        }, function (err) {
            console.error(err)
        })


        api.getTrackSupplement('19622155:2149542').then(function(result) {
            console.log(result.lyrics)
        }, function (err) {
            console.error(err)
        })
    });