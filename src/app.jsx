var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// app.css
require ('style-loader!css-loader!sass-loader!appStyles');

ReactDOM.render(
  <div>Boilerplate 3 Project
   <button type="submit" className="ciao expanded success button">Search</button>
  
    </div>,
  document.getElementById('app')
);

require('./redux-example.jsx');

//require('./noHackMatt.jsx');
