/**
 * Created by fx on 03/02/16.
 */

var express = require('express');

var app = express();

app.use(express.static('public'));

console.log(process.env);

var port = process.env.PORT || 9000;

app.listen(port, function() {
    console.log('Listening on %d', port);
});

