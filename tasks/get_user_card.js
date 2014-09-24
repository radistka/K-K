var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
<<<<<<< HEAD:tasks/get_user_card
    var card = await(function(done) {
        redis.spop('table:' + options.tableId + ':deck', done);
    });
    await(function(done) {
        redis.sadd('user:' + options.player.id + ':cards', card, done)
    });
    console.log('cardToUser: ' + card)
=======
    options.players.forEach(function(player) {
        var card = await( redis.spop.bind(redis, 'table:' + options.tableId + ':deck'));
        await(redis.sadd.bind(redis, 'user:' + player.id + ':cards', card));
        console.log('cardToUser: ' + card)
    })
>>>>>>> b1938458751949b4df8ed60328880ac48156965a:tasks/get_user_card.js
});
