var app = require('./config/express')();

var porta = process.env.PORT || 3000;
var server = http.listen(porta, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});
