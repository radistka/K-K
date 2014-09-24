var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
    var card = await(function(done) {
        redis.spop('table:' + options.tableId + ':deck', done)
    });
    await(function(done) {
        redis.sadd('table:' + options.tableId + ':board', card, done);
    });
    console.log('cardToBoard:' + card)
});
