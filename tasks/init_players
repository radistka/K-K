var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
    console.log('init players');
    options.players.forEach(function(player) {
        await(function(done) {
            redis.hmset('user:' + player.id, {
                'id': player.id,
                'name': player.name
            }, done)
        });
        await(function(done) {
            redis.sadd('table:' + options.tableId + ':users', player.id, done)
        })
    })
});
