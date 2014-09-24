var net = require('net');
var redis = require('redis').createClient();
var async = require('asyncawait/async');
var await = require('asyncawait/await');

function newSocket(socket){
    socket.write('welcome to server');
    socket.on('data', function(data){
        var text = data.toString().trim();
        (async(function(){
            await(redis.lpush.bind(redis, 'tasks', text));
            await(redis.lrange.bind(redis, 'tasks', 0, -1));
        }))();

    });
    socket.on('end', function(){
        console.log('bye, bye');
    })
}

var server = net.createServer(newSocket);
server.listen(8080);
