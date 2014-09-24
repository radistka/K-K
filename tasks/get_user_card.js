var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
<<<<<<< HEAD
    options.players.forEach(function(player) {
        var card = await(function(done) {
            redis.spop('table:' + options.tableId + ':deck', done);
        });
        await(function(done) {
            redis.sadd('user:' + player.id + ':cards', card, done)
        });
        console.log('cardToUser: ' + card)
    })
=======
    var card = await(function(done) {
        redis.spop('table:' + options.tableId + ':deck', done);
    });
    await(function(done) {
        redis.sadd('user:' + options.player.id + ':cards', card, done)
    });
    console.log('cardToUser: ' + card)
>>>>>>> change_get_user_card
});
