var React = require('react');

var InfoComponent = function(props){

  var itemData = props.data;

  return(
    <div>
      <h4>{/*{props.name}*/}---------------------------------------------------------------------------------</h4>
      <p>{itemData.description}</p>
      <p>{itemData.quote}</p>
    </div>
    )
}

module.exports = InfoComponent;