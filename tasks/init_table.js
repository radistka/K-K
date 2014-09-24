var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
    await(function(done) {
        redis.hmset('table:' + options.tableId, {'id':options.tableId, 'stage':options.stage}, done);
    });
    await(function(done) {
        redis.sadd('table:' + options.tableId + ':deck', options.deck, done)
    });
});
