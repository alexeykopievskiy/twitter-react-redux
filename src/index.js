import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import './styles/app.css'
import configureStore from './store/configureStore'
var Twit = require('twitter')

const store = configureStore()

var T = new Twit({
    consumerKey: " NVausxNQRG9ldIxcZoBeVnFuw",
    consumerSecret: "clbe3WGPK23boZpcrbQ49ylpVCOUDlVZSFMAkOqbBMIjebBJJc",
    accessToken: "707543748608131073-ssZVCmn4p7mEXVSNWtU9Cs9TBstE92O",
    accessTokenSecret: "o41D8HVGPO9cunUPXiCne3ydGPu2ExCqxcD05Q0zNyUCY",
    request_options: {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }
  });

  //Example calls

  T.get('search/tweets', function(err, data, response) {
console.log(data)
})

render(
  <Provider store={store}>
    <div className='app'>
      <App />
    </div>
  </Provider>,
  document.getElementById('root')
)
