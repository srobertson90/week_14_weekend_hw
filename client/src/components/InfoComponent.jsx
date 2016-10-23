var React = require('react');

var InfoComponent = function(props){

  var itemData = props.data;

  var isTarget = (itemData.target == true)? "Yup" : "Nope";

  return(
    <div>
      <h4>{/*{props.name}*/}---------------------------------------------------------------------------------</h4>
      <p>{itemData.description}</p>
      <p>{itemData.quote}</p>
      <p>{isTarget}</p>
    </div>
    )
}

module.exports = InfoComponent;