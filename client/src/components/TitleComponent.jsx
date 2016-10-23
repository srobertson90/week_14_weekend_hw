var React = require('react');

var TitleComponent = function(props){
  return(
    <div>
      <h3>{props.title}</h3>
      <h4>---------------------------------------------------------------------------------</h4>
    </div>
    )
}

module.exports = TitleComponent;