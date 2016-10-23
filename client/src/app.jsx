var React = require('react');
var ReactDOM = require('react-dom');
var ItemContainer = require('./components/ItemContainer');

window.onload = function(){
  ReactDOM.render(
    <ItemContainer/>,
    document.getElementById('app')
  );
}
