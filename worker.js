var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');
var fs = require('fs');
var options = {
    tableId: '1',
    stage: '0',
    deck: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9', 'C10', 'CJ', 'CQ', 'CK',
        'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8', 'D9', 'D10', 'DJ', 'DQ', 'DK', 'H1', 'H2', 'H3',
        'H4', 'H5', 'H6', 'H7', 'H8', 'H9', 'H10', 'HJ', 'HQ', 'HK', 'S1', 'S2', 'S3', 'S4', 'S5', 'S6',
        'S7', 'S8', 'S9', 'S10', 'SJ', 'SQ', 'SK'],
    players: [
        {
            id: '1',
            name: 'Tonny'
        },
        {
            id: '2',
            name: 'Linda'
        },
        {
            id: '3',
            name: 'Liza'
        }
    ]
};
var worker = async(function(){
    while(true){
        var task = await(redis.brpop.bind(redis, 'tasks', 200));
        if(task[1]){
            var taskPath = __dirname + '/modules/tasks/' + task[1] + '.js';
            var exist = await(function(done){
                fs.exists(taskPath, function(exist){
                    done(null, exist);
                });
            });
            if(exist){
                var item = require('../modules/tasks/'+task[1]);
                item(options);
            }
        }
    }
});
worker();
