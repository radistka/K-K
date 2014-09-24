var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
    var card = await(redis.spop.bind(redis, 'table:' + options.tableId + ':deck'));
    await(redis.sadd.bind(redis, 'table:' + options.tableId + ':board', card));
});
