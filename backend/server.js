var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');

app.use(express.static(__dirname + '/../frontend'));
app.use(bodyParser.json());

app.get('/weather', function(req, res) {
    var zip = req.query.zip;
    if(!zip) {
        res.status(500);
        res.send("Error: No zip specified");
    }
    request.get({url: "http://api.openweathermap.org/data/2.5/weather?zip="+ zip +
        ",us&units=imperial&APPID=4e19cf4cdf366364f45ce4e4d98624f9"}, function(error, response, body) {
            if(!error && response.statusCode == 200) {
                res.json(JSON.parse(body));
            } else {
                res.status(response.statusCode);
                res.send(error);
                console.log("Error returned from API");
            }
        });
});

var server = app.listen(8081, function() {
    var port = server.address().port; 
    console.log('Server listening on port ', port);
});

module.exports = server;
