var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
    console.log('init players');
    options.players.forEach(function(player) {
        await( redis.hmset.bind(redis, 'user:' + player.id, {
                'id': player.id,
                'name': player.name
            }));
        await( redis.sadd.bind(redis, 'table:' + options.tableId + ':users', player.id));
    })
});
