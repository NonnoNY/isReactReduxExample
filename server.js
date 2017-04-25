var express = require('express');

//app

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
    if (req.headers['x-forwarded-proto'] === 'https') {
        res.redirect('http://' + req.hostname + req.url);

    } else {
        next();
    }
});
app.use(express.static('src'));

app.listen(PORT, function() {
    console.log('express is running on port ' + PORT);
});