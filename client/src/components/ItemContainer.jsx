var React = require('react');
var TitleComponent = require('./TitleComponent.jsx');
var InfoComponent = require('./InfoComponent.jsx');
var IconContainer = require('./IconContainer.jsx');

var ItemContainer = React.createClass({

  getInitialState: function(){
    return{items: [], selectedItem: {name: "select an item", description: "", quote:"", target: ""}}
  },

  componentDidMount: function(){
    var url = "http://localhost:3000/api/items";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      console.log("request has loaded");
      var jsonString = request.responseText;
      var data = JSON.parse(jsonString);
      this.setState({
        items: data
      });
    }.bind(this);
    request.send();
  },

  itemClicked: function(clicked){
    var selectedItem = {name: clicked.name, description: clicked.description, quote: clicked.quote, target: clicked.target}
    this.setState({selectedItem: selectedItem})
  },

  render: function(){
    return(
      <div>
        <TitleComponent title={this.state.selectedItem.name}/>
        <IconContainer data={this.state.items} onClicked={this.itemClicked}/>
        <InfoComponent name={this.state.selectedItem.name} data={this.state.selectedItem}/>
      </div>
    )
  }

})

module.exports = ItemContainer;