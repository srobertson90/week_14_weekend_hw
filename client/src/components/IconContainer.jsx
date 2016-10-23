var React = require('react');
var IconComponent = require('./IconComponent.jsx');

var IconContainer = React.createClass({

  render: function(){

  var icons = this.props.data.map(function(item, index){
    return(<IconComponent id={item} key={index} image={item.image} onClicked={this.props.onClicked}></IconComponent>);
  }.bind(this))

    return(
      <div>
        {icons}
      </div>
      )
  }

})

module.exports = IconContainer;