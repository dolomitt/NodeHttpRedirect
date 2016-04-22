var express = require('express'), useragent = require('express-useragent');
var geoip = require('geoip-lite');
var ipaddr = require('ipaddr');

var app = express();

app.all('*', function(req, res){
  var source = req.headers['user-agent'],
  ua = useragent.parse(source);
  var geo = geoip.lookup(ipaddr.process(req.ip));
  console.log(req.hostname + ' ' + ipaddr.process(req.ip) + ' ' + JSON.stringify(ua));
  console.log(geo);
  res.redirect('https://www.google.com/?q=' + req.params[0].substr(1));
});

console.log('app listening on port 80');
app.listen(80);
