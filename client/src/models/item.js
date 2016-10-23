var Item = function(options){
  this.name = options.name;
  this.description = options.description;
  this.quote = options.quote;
  this.image = options.icon;
  this.target = options.target;
}

console.log(Item);

module.exports = Item;