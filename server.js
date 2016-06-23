var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var twitter = require('twitter');
var configT = require('./config');
var func = require('./src/func');

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)

var twit = new twitter(configT.twitter);
console.log(twit);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

console.log(func);

var params = {screen_name: 'node'};
twit.get('search/tweets.json?q=top%20tweets&result_type=popular&count=10', params, function(error, tweets, response){
  if (!error) {
    func(tweets);
  }
  console.log(1);
  console.log(error);
});
