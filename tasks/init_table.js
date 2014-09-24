var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

module.exports = async(function(options) {
    await(redis.hmset.bind(redis, 'table:' + options.tableId, {'id':options.tableId, 'stage':options.stage}));
    await(redis.sadd.bind(redis, 'table:' + options.tableId + ':deck', options.deck));
});
