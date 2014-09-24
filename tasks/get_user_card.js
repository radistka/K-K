var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options, playerId) {
  var card = await(redis.spop.bind(redis, 'table:' + options.tableId + ':deck'));
  await(redis.sadd.bind(redis, 'user:' + playerId + ':cards', card));
});
