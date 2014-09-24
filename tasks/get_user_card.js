var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

<<<<<<< HEAD
module.exports = async(function(options, playerId) {
  var card = await(redis.spop.bind(redis, 'table:' + options.tableId + ':deck'));
  await(redis.sadd.bind(redis, 'user:' + playerId + ':cards', card));
=======
module.exports = async(function(options) {
  var card = await(redis.spop.bind(redis, 'table:' + options.tableId + ':deck'));
  await(redis.sadd.bind(redis, 'user:' + player.id + ':cards', card));
  console.log('cardToUser: ' + card)
>>>>>>> 517a1b156b6360a3a720e8a2d646d90c76e023de
});
